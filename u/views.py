from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from django.shortcuts import render
from u.models import tutorial
import xml.etree.ElementTree as ET
import gzip


def home(request):
    """
    ...The user home page function i.e /u/<user id>/ ...
    """
    try:
        user_id = request.session['userId']
    except KeyError:
        return HttpResponseRedirect(reverse("home"))
    else:
        tuts = tutorial.objects.filter(user_id=user_id)
        tutorials = list()
        for tut in tuts:
            num_likes = tut.likes
            num_views = tut.views
            num_u_views = tut.uniqueViews
            file_open = gzip.open("tutorial_xmls/compressed/%s.xml.gz" % tut.pk, 'rb')
            xml_string = file_open.read()
            file_open.close()
            root = ET.fromstring(xml_string)
            name = root.get("NAME")
            date_created_exact = root[0].text
            if len(date_created_exact.split(":")) <= 1:
                date_time_created = date_created_exact
            else:
                date_time_created_list = date_created_exact.split(":")
                date_time_created = "%s:%s" % (date_time_created_list[0], date_time_created_list[1])
            tutorials.append(
                [
                    tut.pk,
                    name,
                    date_time_created,
                    num_likes,
                    num_views,
                    num_u_views
                ]
            )
        data = {
            "user_name": request.session["userName"],
            "tuts": tutorials
        }
        return render(request,  "u/home.html", data)


def addDelTut(request, action, t_id=None):
    """
    ...The add and delete tutorial function i.e /u/tutorial/add/ OR /u/tutorial/remove/<tutorial id>/ ...
    """
    try:
        request.session['userId']
    except KeyError:
        return HttpResponseRedirect(reverse("home"))
    else:
        if action == 'add':
            user_name = request.session['userName']
            return render(request, "u/add_tut.html", {"user_name": user_name})   #render(request, "u/add_tut.html", {"user_name": user_name})
        elif t_id is not None:
            return HttpResponse("delTut Page with id: " + str(t_id))