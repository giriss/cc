from django.http import HttpResponseRedirect
from users.models import user
from django.utils import timezone
from django.core.exceptions import ObjectDoesNotExist
from django.core.urlresolvers import reverse
import hashlib


def login(request):
    """
    ...The login check and authentication function...
    """
    try:
        em = request.POST["email"]
        pw = hashlib.md5(hashlib.sha512(request.POST["pass"]).digest()).hexdigest()
        user_login = user.objects.get(email=em, password=pw)
    except ObjectDoesNotExist:
        #error = "!email"
        return HttpResponseRedirect(reverse('home'))
    except KeyError:
        #error = "!fill"
        return HttpResponseRedirect(reverse('home'))
    else:
        request.session['userId'] = user_login.id
        request.session['userName'] = user_login.fullName
        return HttpResponseRedirect(reverse("u:home"))


def register(request):
    """
    ...The register user function...
    """
    try:
        fn = request.POST["name"]
        em = request.POST["email"]
        pw = hashlib.md5(hashlib.sha512(request.POST["pass"]).digest()).hexdigest()
    except KeyError:
        return HttpResponseRedirect(reverse('home'))
    else:
        dt = timezone.now()
        user_add = user(fullName=fn, email=em, password=pw, dateJoined=dt)
        user_add.save()
        request.session['userId'] = user_add.id
        request.session['userName'] = user.fullName
        return HttpResponseRedirect(reverse('home'))


def logout(request):
    """
    ...The user logout function...
    """
    try:
        del request.session['userId']
        del request.session['userName']
    except KeyError:
        return HttpResponseRedirect(reverse('home'))
    else:
        return HttpResponseRedirect(reverse('home'))