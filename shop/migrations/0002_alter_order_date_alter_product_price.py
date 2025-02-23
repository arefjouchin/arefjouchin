# Generated by Django 5.1.1 on 2024-09-24 14:24

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("shop", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="date",
            field=models.DateField(
                default=datetime.datetime(2024, 9, 24, 17, 54, 42, 957089)
            ),
        ),
        migrations.AlterField(
            model_name="product",
            name="price",
            field=models.DecimalField(decimal_places=0, default=0, max_digits=12),
        ),
    ]
