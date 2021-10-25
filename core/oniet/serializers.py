from oniet.models import *
from rest_framework import serializers
import json

class JsonObjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = JsonObject
        fields = '__all__'


def GetRawData():

    # opening the JSON file
    data = open('/home/nico/LabInformatica/ONIET/oniet/core/oniet/RawData.json',)

    print("Datatype before deserialization : "
        + str(type(data)))

    # deserializing the data
    data = json.load(data)

    print("Datatype after deserialization : "
        + str(type(data)))

    print(data)
