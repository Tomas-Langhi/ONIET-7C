from typing import final
from django.db import models
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import generic
from django.views.generic.base import View
from rest_framework.response import Response
import json

from .models import *
from .serializers import *
from rest_framework import viewsets


# Create your views here.

# opening the JSON file
jsonData = open('/home/nico/LabInformatica/ONIET/oniet/core/oniet/RawData.json',)

print("Datatype before deserialization : "
    + str(type(jsonData)))

# deserializing the data
data = json.load(jsonData)

data1 = data['features']

length = len(data1)

print(length)

for key in data1:
    for key2 in key:

        data2 = data1[key2]
        data3 = data2['properties']

        id = data3['id_renabap']
        barrios = data3['Barrio']
        provincias = data3['Provincia']
        acceso_agua = data3['Agua']
        acceso_electricidad = data3['Electricidad']
        acceso_cloaca = data3['Cloaca']



        JsonObject.objects.create(id_renap = id, barrio = barrios, provincia = provincias, accesoAgua = acceso_agua, accesoElectricidad = acceso_electricidad, accesoCloaca = acceso_cloaca)

    
pairs = data.items()



print("Datatype after deserialization : "
    + str(type(data)))




# def GetRawData():

#     # opening the JSON file
#     data = open('/home/nico/LabInformatica/ONIET/oniet/core/oniet/RawData.json',)

#     print("Datatype before deserialization : "
#         + str(type(data)))

#     # deserializing the data
#     data = json.load(data)

#     print("Datatype after deserialization : "
#         + str(type(data)))

#     print(data)

class JsonObjectView(viewsets.ModelViewSet):
    queryset = JsonObject.objects.all()
    serializer_class = JsonObjectSerializer
    permission_classes = []
    
