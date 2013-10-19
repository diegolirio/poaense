//Classe Time
function Time(){
    var nome;     
	this.getNome = function() {
        return this.nome;
    }; 
    this.setNome = function(nome_){
        this.nome = nome_;
    };
}

//Classe Classificacao
function Classificacao(){
    var time;
    var colocacao;
	var pontos;
	var jogos;
	var vitorias;
	var empates;
	var derrotas;
	var golsPros;
	var golsContra;
	var saldoGols;
	var percent;
	this.time = new Time();
	
	this.getTime = function() {
        return this.time;
    }; 
    this.setTime = function(time_){
        this.time = time_;
    };	
	this.getColocacao = function() {
        return this.colocacao;
    }; 
    this.setColocacao = function(colocacao_){
        this.colocacao = colocacao_;
    };		
	this.getPontos = function() {
        return this.pontos;
    }; 
    this.setPontos = function(pontos_){
        this.pontos = pontos_;
    };	
	this.getJogos = function() {
        return this.jogos;
    }; 
    this.setJogos = function(jogos_){
        this.jogos = jogos_;
    };		
	this.getVitorias = function() {
        return this.vitorias;
    }; 
    this.setVitorias = function(vitorias_){
        this.vitorias = vitorias_;
    };		
	this.getEmpates = function() {
        return this.empates;
    }; 
    this.setEmpates = function(empates_){
        this.empates = empates_;
    };		
	this.getDerrotas = function() {
        return this.derrotas;
    }; 
    this.setDerrotas = function(derrotas_){
        this.derrotas = derrotas_;
    };	
	this.getGolsPros = function() {
        return this.golsPros;
    }; 
    this.setGolsPros = function(golsPros_){
        this.golsPros = golsPros_;
    };	
	this.getGolsContra = function() {
        return this.golsContra;
    }; 
    this.setGolsContra = function(golsContra_){
        this.golsContra = golsContra_;
    };	
	
	this.getSaldoGols = function() {
        return (this.golsPros - this.golsContra);
    }; 
	this.getPercent = function() {
        return this.pontos * 100 /(this.jogos * 3);
    }; 		
}

function Jogador() {
	var nome;
	var time;
	var gols;
	var jogos;
	var cartaoAmarelo;
	var cartaoVermelho;
	
	this.time  = new Time();	
	
	this.getNome = function() {
		return this.nome;
	}
    this.setNome = function(nome_){
        this.nome = nome_;
    };	
	this.getTime = function() {
		return this.time;
	}
	this.setTime = function(time_) {
		this.time = time_;
	}	
	this.getGols = function() {
		return this.gols;
	}
	this.setGols = function(gols_) {
		this.gols = gols_;
	}	
	this.getJogos = function() {
		return this.jogos;
	}
	this.setJogos = function(jogos_) {
		this.jogos = jogos_;
	}	
	this.getCartaoAmarelo = function() {
		return this.cartaoAmarelo;
	}
	this.setCartaoAmarelo = function(cartaoAmarelo_) {
		this.cartaoAmarelo = cartaoAmarelo_;
	}
	this.getCartaoVermelho = function() {
		return this.cartaoVermelho;
	}
	this.setCartaoVermelho = function(cartaoVermelho_) {
		this.cartaoVermelho = cartaoVermelho_;
	}	
}

function qtde_jogos() {
	return 2;
}

function get_table_row_html(classificacao) {
	var time_id = classificacao.getTime().getNome().toLowerCase().replace(" ","_");
	var html = '';	
	html +='<tr style="font-size:20px;">';
	html +=      '<td class="text-info">'+classificacao.getColocacao()+'&deg;</td>';
	html += 	 '<td>';
	if (window.location.toString().indexOf("print") > -1) {
		html +=        classificacao.getTime().getNome();
	} else {
		html += 	 ' <a class="visible-desktop" href="#id_modal_time_'+time_id+'" role="button" data-toggle="modal" >'+classificacao.getTime().getNome()+'</a>';
		html += 	 ' <a class="hidden-desktop" href="/'+time_id+'/#id_'+time_id+'">'+classificacao.getTime().getNome()+'</a>';
	}
	html += 	 '</td>';
	html += 	 '<td class="text-info"><center><b>'+classificacao.getPontos()+'</b></center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getJogos()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getVitorias()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getEmpates()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getDerrotas()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getGolsPros()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getGolsContra()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getSaldoGols()+'</center></td>';
	html += 	 '<td class="muted"><center>'+classificacao.getPercent()+'</center></td>';
	html +='</tr>';
	return html;
}	

function get_det_view(classificacao) {
	var html_ = "";
	html_ += '<p >&bull; '+classificacao.getColocacao()+'&deg; Colocado</p> ';
	html_ += '<p>&bull; '+classificacao.getPontos()+' pontos</p>';
	html_ += '<p>&bull; '+classificacao.getGolsPros()+' Gols pr&oacute;</p>';
	html_ += '<p>&bull; '+classificacao.getGolsContra()+' Gols contra</p>';
	html_ += '<p>&bull; '+classificacao.getSaldoGols()+' Saldo de gols</p>';
	html_ += '<p>&bull; '+classificacao.getPercent()+'% de aproveitamento</p>';
	return html_;
}

function get_table_row_artilharia(jogador, artilheiro) {	
	var font_size = 20;
	if (artilheiro) {
		font_size = 32;
	}
	var html = "";
	html += '<tr style="font-size:'+font_size+'px;">';
	html += '	<td >'+jogador.getNome()+' <span class="muted" style="font-size:14px;"> ('+jogador.getTime().getNome()+')</span></td>';
	html += '	<td ><center>'+jogador.getGols()+'</center></td>';
	html += '</tr>';
	return html;
}


/* ====================================================*/
/* ==================== ALTERA TIMES ==================*/
/* ====================================================*/
function get_table_classificacao() {

	var tahiti_class = getTahiti();		
	var os_treze_class = getOsTrese();	
	var real_matismo_class = getRealMatismo();	
	var art_car_class = getArtCar();	
	
	var html = ""; // Deploy: Alterar Somente Sequencia
	html += get_table_row_html(os_treze_class); // 1
	html += get_table_row_html(tahiti_class); // 2
	html += get_table_row_html(real_matismo_class); // 3
	html += get_table_row_html(art_car_class); // 4
	return html;
}

function getTahiti() {
	var time = new Classificacao();
	time.setColocacao(2);
	time.getTime().setNome('Tahiti');
	time.setPontos(6);
	time.setJogos(qtde_jogos());
	time.setVitorias(2);
	time.setEmpates(0);
	time.setDerrotas(0);
	time.setGolsPros(14);
	time.setGolsContra(11);
	return time;
}

function getOsTrese() {
	var time = new Classificacao();
	time.setColocacao(1);
	time.getTime().setNome('Os Treze');
	time.setPontos(6);
	time.setJogos(qtde_jogos());
	time.setVitorias(2);
	time.setEmpates(0);
	time.setDerrotas(0);
	time.setGolsPros(12);
	time.setGolsContra(4);
	return time;
}

function getArtCar() {
	var time = new Classificacao();
	time.setColocacao(4);
	time.getTime().setNome('Art Car');
	time.setPontos(0);
	time.setJogos(qtde_jogos());
	time.setVitorias(0);
	time.setEmpates(0);
	time.setDerrotas(2);
	time.setGolsPros(6);
	time.setGolsContra(14);
	return time;
}

function getRealMatismo() {
	var time = new Classificacao();
	time.setColocacao(3);
	time.getTime().setNome('Real Matismo');
	time.setPontos(0);
	time.setJogos(qtde_jogos());
	time.setVitorias(0);
	time.setEmpates(0);
	time.setDerrotas(2);
	time.setGolsPros(9);
	time.setGolsContra(12);
	return time;
}


// artilharia....
function get_table_artilharia() {
	var html_ = "";
	html_ += get_table_row_artilharia(getNeguinho(), true);
	html_ += get_table_row_artilharia(getBruno(), true);
	html_ += get_table_row_artilharia(getBizoca(), false);
	html_ += get_table_row_artilharia(getDenis(), false);
	html_ += get_table_row_artilharia(getBiruta(), false);
	html_ += get_table_row_artilharia(getVandinho(), false);
	html_ += get_table_row_artilharia(getDu_Magrelo(), false);
	html_ += get_table_row_artilharia(getNicolas(), false);
	html_ += get_table_row_artilharia(getDu_Alemao(), false);
	html_ += get_table_row_artilharia(getMarcelo_Vargas(), false);
	html_ += get_table_row_artilharia(getFelipe(), false);
	html_ += get_table_row_artilharia(getEskilo(), false);
	html_ += get_table_row_artilharia(getDiogo(), false);
	html_ += get_table_row_artilharia(getJean(), false);
	html_ += get_table_row_artilharia(getDiego(), false);
	html_ += get_table_row_artilharia(getJulio(), false);
	html_ += get_table_row_artilharia(getAndy(), false);
	return html_;
}

function getNeguinho() {	
	var j = new Jogador();
	j.setNome("Neguinho");
	j.getTime().setNome("Os Treze");
	j.setGols(5);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);
	return j;
}

function getBruno() {
	var j = new Jogador();
	j.setNome("Bruno");
	j.getTime().setNome("Tahiti");
	j.setGols(5);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);	
	return j;
}

function getBizoca() {
	var j = new Jogador();
	j.setNome("Biz&oacute;ca");
	j.getTime().setNome("Os Treze");
	j.setGols(4);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getDenis() {
	var j = new Jogador();
	j.setNome("Denis");
	j.getTime().setNome("Real Matismo");
	j.setGols(3);
	j.setJogos(4);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getBiruta() {
	var j = new Jogador();
	j.setNome("Biruta");
	j.getTime().setNome("Os Treze");
	j.setGols(3);
	j.setJogos(3);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getVandinho() {
	var j = new Jogador();
	j.setNome("Vandinho");
	j.getTime().setNome("Tahiti");
	j.setGols(3);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getDu_Magrelo() {
	var j = new Jogador();
	j.setNome("D&uacute; Magrelo");
	j.getTime().setNome("Real Matismo");
	j.setGols(3);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getNicolas() {
	var j = new Jogador();
	j.setNome("Nicolas");
	j.getTime().setNome("Real Matismo");
	j.setGols(2);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getDu_Alemao() {
	var j = new Jogador();
	j.setNome("D&uacute; Alem&atilde;o");
	j.getTime().setNome("Tahiti");
	j.setGols(2);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getMarcelo_Vargas() {
	var j = new Jogador();
	j.setNome("Marcelo Vargas");
	j.getTime().setNome("Tahiti");
	j.setGols(2);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getFelipe() {
	var j = new Jogador();
	j.setNome("Felipe");
	j.getTime().setNome("? Gols pelo Art Car");
	j.setGols(2);
	j.setJogos(1);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getEskilo() {
	var j = new Jogador();
	j.setNome("Eskilo");
	j.getTime().setNome("Real Matismo");
	j.setGols(2);
	j.setJogos(2);
	j.setCartaoAmarelo(1);
	j.setCartaoVermelho(0);		
	return j;
}

function getDiogo() {
	var j = new Jogador();
	j.setNome("Diogo");
	j.getTime().setNome("Tahiti");
	j.setGols(1);
	j.setJogos(1);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getJean() {
	var j = new Jogador();
	j.setNome("Jean");
	j.getTime().setNome("Tahiti");
	j.setGols(1);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getDiego() {
	var j = new Jogador();
	j.setNome("Diego");
	j.getTime().setNome("Art Car");
	j.setGols(1);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getJulio() {
	var j = new Jogador();
	j.setNome("Julio");
	j.getTime().setNome("Art Car");
	j.setGols(1);
	j.setJogos(2);
	j.setCartaoAmarelo(0);
	j.setCartaoVermelho(0);		
	return j;
}

function getAndy() {
	var j = new Jogador();
	j.setNome("Andy");
	j.getTime().setNome("Os Trezes");
	j.setGols(1);
	j.setJogos(2);
	j.setCartaoAmarelo(1);
	j.setCartaoVermelho(0);		
	return j;
}
/* ====================================================*/
/* ==================== fim ALTERA TIMES ==================*/
/* ====================================================*/


$(function() {
	$('#id_tbdoy_class').html(get_table_classificacao());
	$('#id_tbody_artilharia').html(get_table_artilharia());
});


