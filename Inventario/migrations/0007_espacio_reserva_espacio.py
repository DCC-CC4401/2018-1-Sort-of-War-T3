# Generated by Django 2.0.5 on 2018-06-01 16:00

import datetime
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Inventario', '0006_merge_20180523_1800'),
    ]

    operations = [
        migrations.CreateModel(
            name='Espacio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Reserva_Espacio',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user', models.CharField(default='No tiene usuario asignado.', max_length=200)),
                ('state', models.CharField(max_length=200)),
                ('date', models.DateTimeField(blank=True, default=datetime.datetime.now, null=True, verbose_name='date reserved')),
                ('space', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Inventario.Espacio')),
            ],
        ),
    ]