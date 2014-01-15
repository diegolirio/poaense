from django.db import models
from datetime import datetime
# Create your models here.

class Time(models.Model):
	nome = models.CharField(max_length=30)
	
class Status(models.Model):
	codigo = models.CharField(max_length=1) # { F, A, E }
	descricao = models.CharField(max_length=30, unique=True) # {F:(finalizado), A: (em andamento, atualizando processo), E: (Edicao)}
	def __unicode__(self):
		return "["+self.codigo+"] " + self.descricao	
	
class Jogador(models.Model):
	nome = models.CharField(max_length=30)
	time = models.ForeignKey(Time, blank=True)
	
class Campeonato(models.Model):
	nome = models.CharField(max_length=30)
	
class Grupo(models.Model):
	nome = models.CharField(max_length=30)

class Jogo(models.Model):
	grupo = models.ForeignKey(Grupo)
	time_a = models.ForeignKey(Time)
	time_b = models.ForeignKey(Time)	
	resultado_a = models.IntegerField(default=0)
	resultado_b = models.IntegerField(default=0)
	data_hora = models.DateTimeField(default=datetime.now)
	vencedor = models.CharField(max_length=1, blank=True, default='E')
	status = models.ForeignKey(Status, default='E') 
	juiz = models.CharField(max_length=50, blank=True)
	
class Escalacao(models.Model):
	jogo = models.ForeignKey(Jogo)
	jogador = models.ForeignKey(Jogador)
	time = models.ForeignKey(time)
	
class Acao(models.Model):
	codigo = models.CharField(max_length=3, blank=True)
	descricao = models.CharField(max_length=50, blank=True)
	
class AcoesJogo(models.Model):
	acao = models.ForeignKey(Acao)
	escalacao = models.ForeignKey(Escalacao)
	data_hota = models.DateTimeField(default=datetime.now)
	
class Classificacao(models.Model):
	time = models.ForeignKey(Time)
	campeonato = models.ForeignKey(Campeonato)
	pontos = models.IntegerField(default=0)
	jogos = models.IntegerField(default=0)
	vitorias = models.IntegerField(default=0)
	empates = models.IntegerField(default=0)
	derrotas = models.IntegerField(default=0)
	golsPro = models.IntegerField(default=0)
	golsContra = models.IntegerField(default=0)
	
class Acessos(models.Model):
	ip = models.CharField(max_length=50)
	data_hora = models.DateTimeField(default=datetime.now)
	date = models.DateField()
	def __unicode__(self):
		return 'IP: ' + self.ip + ' | ' + self.data_hora.strftime("%d/%m/%Y %H:%M") #+ ' | ' + self.data.strftime("%d/%m/%Y")
		
class AccessCount(models.Model):
	today_count = models.IntegerField() 
	count = models.IntegerField()
	def __unicode__(self):
		return 'Hoje: ' + str(today_count) + ' - Total: ' + str(count)
