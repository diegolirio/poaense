# Create your views here.
from django.shortcuts import render_to_response
from django.shortcuts import redirect
from core.models import Acessos
from datetime import datetime

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[-1].strip()
    else:
		ip = request.META.get('REMOTE_ADDR')
    return ip
	
def classificacao(request, view=0):
	ip = get_client_ip(request)
	date = datetime.now().date()
	#if Acessos.objects.filter(ip=ip, date=date).count() == 0:
	a = Acessos()
	a.date = date
	a.ip = ip
	a.save()
	#	print('new ip: ' + ip)
	#else:
	#	print('ip: ja acessou ' + ip)
	today_access = Acessos.objects.filter(date=date).count()
	access = Acessos.objects.all().count()		
	return render_to_response('_base.html',{'template': 'classificacao.html', 'ip': ip, 'today_access': today_access, 'access': access, 'view': view})	
	
def jogos(request):
	return render_to_response('_base.html',{'template': 'jogos.html',})				
	
def phone_jogo_1(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_1.html',})			

def phone_jogo_2(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_2.html',})	