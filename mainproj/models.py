from django.db import models

# Create your models here.

class userdata(models.Model):
    FirstName = models.CharField(max_length=40)
    LastName = models.CharField(max_length=40)
    age = models.IntegerField()
    mail = models.CharField(max_length=80)
    username = models.CharField(max_length=40)
    password = models.CharField(max_length=40)