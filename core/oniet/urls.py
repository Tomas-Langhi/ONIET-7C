from django.urls import path
from oniet.views import GetRawData

urlpatterns = [
    path('view/', GetRawData, name= 'dataView'),
]


