from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.core.urlresolvers import reverse


def home(request):
    try:
        request.session["userId"]
    except KeyError:
        return render(request, "home/index.html")
    else:
        return HttpResponseRedirect(reverse("u:home"))