from django.conf.urls import patterns, include, url
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'poaense.views.home', name='home'),
	url(r'^classificacao/(?P<view>\d+)$', 'core.views.classificacao', name='classificacao'),
	url(r'^jogos/$', 'core.views.jogos', name='jogos'),
	url(r'^times/$', 'core.views.times', name='times'),
	url(r'^print/$', 'core.views.print_', name='print_'),
	
	url(r'^patrocinadores/$', 'core.views.patrocinadores', name='patrocinadores'),
	
	url(r'^tahiti/$', 'core.views.tahiti', name='tahiti'),
	url(r'^os_treze/$', 'core.views.ostreze', name='ostreze'),
	url(r'^art_car/$', 'core.views.artcar', name='artcar'),
	url(r'^real_matismo/$', 'core.views.realmatismo', name='realmatismo'),
	
    # url(r'^poaense/', include('poaense.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)

if settings.DEBUG:
	urlpatterns += patterns('', 
	                        (r'^media/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    )
