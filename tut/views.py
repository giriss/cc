from django.http import HttpResponseRedirect, HttpResponse
from django.core.urlresolvers import reverse
from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from django.utils.encoding import force_unicode
from datetime import datetime
import xml.etree.ElementTree as ET
from u.models import tutorial
import re
import gzip
#import zlib


def strip_script(value):
    """
    --> strip script tag function <--
    """
    stripped = re.sub(r'<script(?:\s[^>]*)?(>(?:.(?!/script>))*</script>|/>)', '', force_unicode(value), flags=re.S)
    return stripped


def view_tut(request, t_id=None):
    """
    ...The view tutorial page function i.e /tut/<tutorial id>/...
    """
    try:
        tut = tutorial.objects.get(pk=t_id)
        xml_file = gzip.open("tutorial_xmls/compressed/%s.xml.gz" % t_id, "rb")
        xml_string = xml_file.read()
        xml_file.close()
    except ObjectDoesNotExist:
        data = {"detail": "Tutorial does not exist in database"}
        return render(request, "error/error.html", data)
    except IOError:
        data = {"detail": "Tutorial file not found"}
        return render(request, "error/error.html", data)
    else:
        try:
            request.session['userId']
        except KeyError:
            user_name = None
        else:
            user_name = request.session['userName']
        tut.views += 1
        tut.save()
        theme = tut.theme
        root = ET.fromstring(xml_string)
        name = root.get("NAME")
        step_n_detail = list()
        for step in root.iter("STEP"):
            step_n_detail.append(
                [
                    step.get("TITLE"),
                    step[0].text
                ]
            )
        data = {
            "user_name": user_name,
            "t_id": t_id,
            "name": name,
            "step_n_detail": step_n_detail,
            "theme": theme,
        }
        return render(request,  "tut/view_tut.html", data)


def add_tut(request):
    """
    ...The add tutorial function...
    """
    try:
        user_id = request.session["userId"]
        tut_name = request.POST['name']
        tut_titles = request.POST['title'].split("<!--I!L@o#v$e%A^n&s*h(i)_+-=-->")  #get the titles, splits it and store it in an array
        tut_details = strip_script(request.POST['detail']).split("<!--I!L@o#v$e%A^n&s*h(i)_+-=-->")  #get the details, STRIP THE SCRIPT TAGS, splits it and store it in an array
    except KeyError:
        return HttpResponseRedirect(reverse("home"))
    else:
        tut_titles.pop()
        tut_details.pop()
        create_tut = tutorial.objects.create(user_id=user_id)
        tut_id = create_tut.pk
        root = ET.Element("TUTORIAL", {"NAME": tut_name, "ID": str(tut_id), "USER_ID": str(user_id)})
        date = ET.SubElement(root, "DATE")
        date.text = str(datetime.now())
        i = 0
        for stp in tut_titles:
            step = ET.SubElement(root, "STEP", {"TITLE": stp, "NUMBER": str(i+1)})
            detail = ET.SubElement(step, "DETAIL")
            detail.text = tut_details[i]
            i += 1
        xml_string = '<?xml version="1.0"?>'+ET.tostring(root)
        f = gzip.open('tutorial_xmls/compressed/%s.xml.gz' % str(tut_id), 'wb', 9)
        f.write(xml_string)
        f.close()
        return HttpResponse(str(tut_id))