from django.db import models

# Create your models here.
class user(models.Model):
    fullName = models.CharField(max_length=100)
    dateJoined = models.DateTimeField('date joined')
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=32)
    confirmed = models.BooleanField(default=False)

    def __unicode__(self):
        return u'%s %s' % (self.fullName, self.email)