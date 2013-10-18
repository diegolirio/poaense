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
	
	this.time  = new Time();	
	
	var getNome = function() {
		return this.nome;
	}
	var setNome = function(nome_) {
		this.nome = nome_;
	}
	var getTime = function() {
		return this.time;
	}
	var setTime = function(time_) {
		this.time = time_;
	}	
	var getGols = function() {
		return this.gols;
	}
	var setGols = function(gols_) {
		this.gols_ = gols_;
	}	
}

function qtde_jogos() {
	return 2;
}

function get_table_row_html(classificacao) {
	var time_id = classificacao.getTime().getNome().toLowerCase().replace(" ","_");
	var html = '';	
	html +='<tr style="font-size:20px;">';
	html +=      '<td class="text-info">'+classificacao.getColocacao()+'º</td>';
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
function getNeguinho() {
	var j = new Jogador();
	j.setNome("Neguinho");
	j.getTime().setTime("Os Treze");
	j.setGols(5);
	return j;
}

function getBruno() {
	var j = new Jogador();
	j.setNome("Bruno");
	j.getTime().setTime("Tahiti");
	j.setGols(5);
	return j;
}

function getBruno() {
	var j = new Jogador();
	j.setNome("Bruno");
	j.getTime().setTime("Tahiti");
	j.setGols(5);
	return j;
}
/* ====================================================*/
/* ==================== fim ALTERA TIMES ==================*/
/* ====================================================*/




$(function() {
	$('#id_tbdoy_class').html(get_table_classificacao());
});


