from django.db import models



class JsonObject(models.Model):
    id_renap = models.CharField(max_length=100)
    barrio = models.CharField(max_length=100)
    provincia =  models.CharField(max_length=100)
    accesoAgua = models.CharField(max_length=150)
    accesoElectricidad = models.CharField(max_length=150)
    accesoCloaca = models.CharField(max_length=150)
    cantFamilias = models.IntegerField()

