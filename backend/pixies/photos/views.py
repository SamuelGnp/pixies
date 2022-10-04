from rest_framework import generics

from pixies.photos.models import Photo
from pixies.photos.serializers import PhotoSerializer

class PhotosListView(generics.ListAPIView):
    queryset = Photo.objects.all()
    serializer_class = PhotoSerializer