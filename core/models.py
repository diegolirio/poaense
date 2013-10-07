from django.db import models
from datetime import datetime
# Create your models here.

class Time(models.Model):
	nome = models.CharField(max_length=30)
	
class Status(models.Model):
	codigo = models.CharField(max_length=1)# { F, A, E }
	descricao = models.CharField(max_length=30, unique=True)	# {F:(finalizado), A: (em andamento, atualizando processo), E: (Edicao)}
	def __unicode__(self):
		return "["+self.codigo+"] " + self.descricao	
	
class Jogador(models.Model):
	nome = models.CharField(max_length=30)
	
class Campeonato(models.Model):
	nome = models.CharField(max_length=30)
	
class Grupo(models.Model):
	nome = models.CharField(max_length=30)

class Jogo(models.Model):
	grupo = models.ForeignKey(Grupo)
	time_a = models.CharField(max_length=30)
	time_b = models.CharField(max_length=30)
	#time_a = models.ForeignKey(Time)
	#time_b = models.ForeignKey(Time)	
	resultado_a = models.IntegerField(default=0)
	resultado_b = models.IntegerField(default=0)
	data_hora = models.DateTimeField(default=datetime.now)
	vencedor = models.CharField(max_length=1, blank=True, default='E')
	status = models.ForeignKey(Status, default='E') 
	
class GolsJogo(models.Model):
	jogador = models.ForeignKey(Jogador)
	quantidade_gols = models.IntegerField(default=0)
	jogo = models.ForeignKey(Jogo)
