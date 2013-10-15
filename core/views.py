# Create your views here.
from django.shortcuts import render_to_response
from django.shortcuts import redirect
from core.models import Acessos
from core.models import AccessCount
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
	today_access = 0 #Acessos.objects.filter(date=date).count()
	access = 0 #Acessos.objects.all().count()		
	if Acessos.objects.filter(ip=ip, date=date).count() == 0:
		a = Acessos()
		a.date = date
		a.ip = ip
		a.save()
		if AccessCount.objects.all().count() > 0:
			ac = AccessCount.objects.all()[0:1].get()
			ac.today_count = ac.today_count+1
			ac.count = ac.count+1
			ac.save()
		else:
			ac = AccessCount()
			ac.today_count = 1
			ac.count = 1
			ac.save()
		#	print('new ip: ' + ip)
		today_access = ac.today_count
		access = ac.count
	else:
		print('ip: ja acessou ' + ip)	
		if AccessCount.objects.all().count() > 0:
			ac = AccessCount.objects.all()[0:1].get()
			today_access = ac.today_count
			access = ac.count				
	return render_to_response('_base.html',{'template': 'classificacao.html', 'ip': ip, 'today_access': today_access, 'access': access, 'view': view})	
	
def jogos(request):
	return render_to_response('_base.html',{'template': 'jogos.html',})				
	
def phone_jogo_1(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_1.html',})			

def phone_jogo_2(request):
	return render_to_response('_base.html',{'template': 'rodada_1/phone_jogo_2.html',})	