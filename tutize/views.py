from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse


def home(request):
    try:
        request.session["userId"]
    except KeyError:
        return render(request, "home/index.html")
    else:
        return HttpResponseRedirect(reverse("u:home"))


def sslverify(request):
    return HttpResponse("""31DCCBD89DC9A38C468754142ECBBBADB8D8DB68
comodoca.com""")
