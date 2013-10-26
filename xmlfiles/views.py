from django.shortcuts import render


def xml(request, t_id):
    return render(request, "tutorial_xmls/%s.xml" % t_id, content_type='application/xhtml+xml')