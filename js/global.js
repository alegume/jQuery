//$(document).ready(function() {
$(function() { // Identico ao de cima

		console.log('DOM Pronto');

		// Ao clicar no elemento <a>
		$('a').click(function(event) {
				//console.log('Texto: ' + $(this).text());
				event.preventDefault(); // Impede comportamento padrao do link

				// Adiciona classes
				$(this).addClass('black');


				// manipula atributos
				//console.log('href: ' + $(this).attr('href'));
				$('a').attr('href', 'htt://ifsc.edu.br');
				$('a').attr({
						href: 'http://ifsc.edu.br',
						title: 'IFSC'
				});
				$(this).text('Site do IFSC');
		});

		// ao clicar no elemento <p>
		$('p').click(function() {
				$(this).removeClass('blue').addClass('black');
				//$(this).hide();
				//$(this).toggleClass('black');
		});

		// Seletores
		$('#id');
		$('.class');
		$("input[name='first_name']");
		$('#contents ul.people li');
		$('div.myClass, ul.people');
		// Pseudo Selectors
		$('a.external:first');
		$('tr:odd');
		$('#myForm :input');
		$('div:visible');
		// Todos depois dos 3 primeiros
		$('div:gt(2)');
		// divs com animacao
		$('div:animated');
		// testar se foi selecionado algum elemento
		if ($("p").length) {
				//console.log('tamanho: ' + $("p").length);
		}

		// Refinando selecoes
		$("article").has("p");
		$("h1").not(".classe");
		$("ul li").first();
		$("ul li").last();
		$("ul li").eq(2);    // terceiro elemento

		// Encadeando
		//$('article').find('h2').html('Cacilds');

		// Manipulando elemento
		let x = $('p:first');
		//x.html('<h4>Suco de cevadis</h4>');
		// console.log(x.text());
		// console.log(x.width());
		// console.log(x.height());
		// console.log(x.position());
		$('img').css('border', '2px dashed black');
		$('img').css({
				width: '600px',
				margin: '15px 0'
		});

		// Mover, remover, copiar e clonar elementos
		// $('#add').click(function() {
		//     let x = prompt("Digite o nome", $('.boxes > .box').length - 1);
		//     let elemento = $('<div class=\"box\">' + x + '</div>');
		//     elemento.insertBefore('#add');
		// });

		$('#add').click(function() {
				let x = $('.boxes > .box').length - 1;
				$(this).clone().text(x).attr('id', 'n_' + x).insertBefore('#add');
		});

		$('#remove').click(function() {
				$('.box:eq(-4)').remove();
		});

		// .each()
		$('#copiar_links').click(function() {
				$('li > a').each(function() {
						$('#links').append(' | ' + $(this).text() + ' | ');
				});
		});

		// hover 1 ou duas funcoes
		$('a').hover(function() {
				$(this).toggleClass('link');
		});


		/// AJAX (Asynchronous JavaScript and XML)
		// Mas sem XML ;P
		//$.ajax();

});


$(window).on("load", function() {
		console.log("carregado");
		// $('img').fadeIn(2000).click(function() {
		//     $(this).fadeOut(2000);
		// });
});
