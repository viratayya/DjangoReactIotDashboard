from django.db import models

# Create your models here.

class IotData(models.Model):
	"""
		Instead of default PK, we are using timestamp as primary_key because of uniqueness and it 
		is a 64-bit integer, much like an IntegerField except that 
		it is guaranteed to fit numbers from -9223372036854775808 to 9223372036854775807.
		https://stackoverflow.com/questions/32516026/how-to-create-double-and-long-text-field-from-django-models
		
	"""
	timestamp = models.BigIntegerField(primary_key=True,verbose_name="Timestamp", db_index=True)
	
	"""
		FloatField uses Python’s float type internally, while DecimalField uses Python’s Decimal type. 
		For information on the difference between the two, 
		see Python’s documentation for the decimal module.
		https://docs.djangoproject.com/en/dev/ref/models/fields/#floatfield
		https://docs.djangoproject.com/en/dev/ref/models/fields/#decimalfield
	"""
	reading = models.DecimalField(max_digits=30, decimal_places=30, verbose_name="Reading")

	sensorType = models.CharField(max_length=20,verbose_name="Sensor Type")

	def __str__(self):
		"""
			String representation of instance
		"""
		return self.timestamp
