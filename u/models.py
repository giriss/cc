from django.db import models
from users.models import user


class tutorial(models.Model):
    user = models.ForeignKey(user)
    likes = models.BigIntegerField("Number of likes", default=0)
    views = models.BigIntegerField("Number of views", default=0)
    uniqueViews = models.BigIntegerField("Number of unique views", default=0)
    theme = models.IntegerField("Model number of tutorial", default=1)