# Generated by Django 2.2.10 on 2020-02-23 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='IotData',
            fields=[
                ('timestamp', models.BigIntegerField(primary_key=True, serialize=False, verbose_name='Timestamp')),
                ('reading', models.DecimalField(decimal_places=30, max_digits=30, verbose_name='Reading')),
                ('sensorType', models.CharField(max_length=20, verbose_name='Sensor Type')),
            ],
        ),
    ]