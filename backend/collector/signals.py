from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import IotData

#TODO need to do after data like sending data to dashboard through WS etc.
@receiver(post_save, sender=IotData)
def save_profile(sender, instance, **kwargs):
    print(instance.__dict__)
  