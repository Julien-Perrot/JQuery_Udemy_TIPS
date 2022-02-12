// Quand le document est prêt (le document et notre page html), alors execute moi la function.
$(document).ready(function() {

    // OU SON RACCOURCI :

        // $(function() {

        // }); 

    // SELECTORS (SELECTEURS) :

        // $('') Permet de désigner un élément, il faut commencer par $ :

            // $('h1').hide(); // .hide permet de cacher l'élément designer qui est h1
            $('.p-select-1, .p-select-3').hide(); // Pour cacher plusieurs éléments qui comporte des classes
            $('#p-select-6, #p-select-8').hide(); // Pour cacher plusieurs éléments qui comporte des id
            // $('p:nth-child(2)').hide(); // Cache le deuxiéme élément de mon tag p


    // EVENTS (ÉVÉNEMENTS) : 

        // Fonction .click  permet au click sur mon paragraphe 1 (de classe .p-events-1) de cacher mon paragraphe 6 (de l'id #p-events-6)
        $('.p-events-1').click(function() {
            $('#p-events-6').hide();
        });

        // Fonction .mouseenter permet de cacher mon paragraphe 8 (de l'id #p-events-8) au survol de ma souris sur mon paragraphe 2 (de classe .p-events-2)
        $('.p-events-2').mouseenter(function() {
            $('#p-events-8').hide();
        })

        // Fonction .mouseleave permet de d'afficher mon paragraphe 8 (de l'id #p-events-8) quand souris sort de mon paragraphe 2 (de classe .p-events-2)
        $('.p-events-2').mouseleave(function() {
            $('#p-events-8').show();
        })

        // Fonction hover qui a le même effet que .mouseenter et mouseleave, mon paragraphe 3 (de classe .p-events-3) cache et affiche suivant le survol de la souris sur mon paragraphe 7 (de classe .p-events-7)
        $('.p-events-3').hover(function() {
            $('.p-events-7').hide();
        },
        function() {
            $('.p-events-7').show();
        });

        // Fonction .on('click', function() ... En premier argument on met notre string de notre event (événement) qui est 'click'.
        // Ce qui veux dire que quand .on il y a un 'click' alors tu m'execute la fonction qui est de cacher mon paragraphe 5 (de classe .p-events-5)
        $('.p-events-4').on('click', function() {
            $('.p-events-5').hide();
        });

        // Fonction avec objet : mouseenter, mouseleave & click : 
        // Quand je survol mon paragraphe 10 (de classe .p-events-10) cache est affiche mon paragraphe 16 (de classe .p-events-16)
        // Et quand je clique sur paragraphe 10 (de classe .p-events-10), je cache mon paragraphe 13 (de classe .p-events-13)
        $('.p-events-10').on({
            mouseenter: function() {
                $('.p-events-16').hide();
            },
            mouseleave: function() {
                $('.p-events-16').show();
            },
            click: function() {
                $('.p-events-13').hide();
            }
        });

    
    // LES EFFETS : 

        $('.p-effets-1').click(function() {
            $('.p-effets-2').hide('slow'); // 'slow' est l'argument de mon élément .hide
        });

        $('.p-effets-3').click(function() {
            $('.p-effets-2').show('fast'); // 'fast' est l'argument de mon élément .show
        });

        // Argument en milliseconde (1000 milliseconde = 1 seconde)

        $('.p-effets-4').click(function() {
            $('.p-effets-5').hide(2000); // 2000 est l'argument de mon élément .hide
        });

        $('.p-effets-6').click(function() {
            $('.p-effets-5').show(4000); // 4000 est l'argument de mon élément .show
        });

        // Fonction callback : callback est une fonction qui se passe quand la fonction précédante c'est terminer.
        
        $('.p-effets-7').click(function() {
            $('.p-effets-8').hide(3000, function() { // function est mon callback
                $('.p-effets-9').hide(4000, function() { // function est mon callback
                    $('.p-effets-8').show(1000, function() { // function est mon callback
                        $('.p-effets-9').show(2000);
                    })
                });
            });
        });

        // Fonction toggle : toggle est une fonction qui rend visible ou bien invisible

        $('.p-effets-10').click(function() {
            $('.p-effets-11').toggle();
        })

        // Fonction fade : fadeOut ou fadeIN : cache est affiche de facon floux et non instantanée.

        $('.p-effets-12').click(function() {
            $('.p-effets-13').fadeOut(2000, function() { // function est mon callback
                $('.p-effets-13').fadeIn(4000);
            });
        });

        $('.p-effets-14').click(function() {
            $('.p-effets-15').fadeToggle(2000); // function fade + toggle
        });
        
        $('.p-effets-16').click(function() {
            $('.p-effets-17').fadeTo(3000, 0.4); // function fadoTo cache jusqu'à l'opaciter demander est qui est ici de 0.4 en 3000 miliseconde
        })


    // LES ANIMATIONS :

        // Comment lancer une animation en JQuery :

            /**
             * SYNTAXE :
             *      $(selector).animate(argument1, argument2, argument3);
             * 
             *      animate = est la fonction animate qui prendra des arguments
             *      argument1 = est un objet qui correspondra au propriéter que je veux animer de mon selector
             *      arguments2 = sa sera la vitesse, c'est a dire le temps d'execution de mon animation
             *      arguments3 = sa peut être une fonction callback, je peux utiliser certaines fonctions en plus avec le callback une fois que ma premiere fonction est executer
             * 
             * POUR INFO :
             *      arguments2 & arguments3 sont optionnelle, pas besoins de les utiliser.
             */
        
            $('.btn').click(function() {
                $('.color-div').animate({left: '1000px'}, 2000, function() { // Argument1 = {left: '1000px'}, ---- Argument2 = 2000, ---- Argument3 = function callback
                    $('.color-div').hide();
                });
            });

            $('.btn-2').click(function() {
                $('.color-div-2').animate({ // Plusieurs animations sur un seul selector qui est '.color-div-2'
                    left: '1000px',
                    width: '300px',
                    height: '300px',
                    opacity: 0.2
                }, 2000);
            })

            $('.btn-3').click(function() {
                $('.color-div-3').animate({ 
                    left: '1000px',
                    width: '+=100px', // Rajout d'une valeur a une valeur déja existante (200px de valeur existante += 100px = 200px = 100px)
                    height: '-=100px', // Diminution d'une valeur a une valeur déja existante (200px de valeur existante -- 100px = 200px - 100px)
                    opacity: 0.8
                }, 2000);
            })

            // Animation qui se font les uns à la suite des autres : 

            $('.btn-4').on('click', function() {
                $('.color-div-4').animate({left: '700px'}, 3000);
                $('.color-div-4').animate({opacity: 0.4}, 2000);
                $('.color-div-4').animate({width: '+=100px'}, 1000);
                $('.color-div-4').animate({height: '-=100px'}, 3000);
            });

            $('#start').on('click', function() {
                $('.color-div-5').animate({left: '700px'}, 3000);
                $('.color-div-5').animate({opacity: 0.4}, 2000);
                $('.color-div-5').animate({width: '+=100px'}, 1000);
                $('.color-div-5').animate({height: '-=100px'}, 3000);
            });

            $('#stop').on('click', function() {
                $('.color-div-5').stop(true);
                // OU :
                // $('.color-div-5').stop(true, true);
            })

            // Les animations de slides (slideUp & slideDown):

            $('.btn-6').on('click', function() {
                $('.color-div-6').slideUp(1000,); // cache notre élément sous forme de slide
            });

            $('.btn-7').on('click', function() {
                $('.color-div-6').slideDown(1000); // affiche notre élément sous forme de slide
            });

            // OU écrit de cette façon :
            $('.btn-8').click(function() {
                $('.color-div-7').slideUp(2000, function() {
                    $('.btn-9').click(function() {
                        $('.color-div-7').slideDown(2000);
                    });
                });
            });

            // Compilation : 
            $('.btn-10').click(function() {
                $('.color-div-8').slideUp(2000).slideDown(2000).fadeOut(2000).fadeIn(2000); // Le point '.' permet de faire enchainer les arguments de notre éléments les uns derriére les autres.
            })

    
    // JQuery et HTML :

        // Comment récuper notre text HTML :

        let myLet = $('.p-jq-html-1').text(); // .text récupére que notre text écrit dans le tag <p></p> concerner
        console.log(myLet);

        let myLet2 = $('.p-jq-html-1').html(); // .html récupére pas que le text mais aussi le <b></b> compris dans notre tag <p></p>
        console.log(myLet2);

        let myLet3 = $('.jquery-html').html(); // Ici je récupére tout ce qui se trouve dans la l'élément demande (de classe .jquery-html) y compris tout les tags
        console.log(myLet3);

        // Récupération dans la console.log(); de ce qu'on écrire dans notre input une fois une fois la validation faite par le button Start
        $('.btn-11').on('click', function() {
            let myLet4 = $('#my-input').val();
            console.log(myLet4);
        });

        // Récupération dans la console.log(); du style de notre div (de classe .jquery-html) dans mon html
        $('.btn-11').on('click', function() {
            let myLet5 = $('.jquery-html').attr('style'); // .attr car je veux connaitre l'attribut style dans ma div (de classe .jquery-html) dans mon html
            console.log(myLet5);
        });

        // Écrire un nouveau text dans mon paragraphe 1 (de classe p-jq-html-1) :
        $('.btn-11').on('click', function() {
            $('.p-jq-html-1').text('Voila mon nouveau text de JQuery HTML quand j\'appuie sur le bouton start ;)');
        });

        // Écrire un nouveau text dans mon paragraphe 2 mais en html (de classe p-jq-html-2) :
        $('.btn-11').on('click', function() {
            $('.p-jq-html-2').html('Voila mon nouveau text de JQuery HTML quand j\'appuie sur le bouton start mais avec tag <strong>pour cette phrase qui ce trouve en strong</strong> ;)');
        });

        // Changer la valeur de notre tag input ( d'id my-input) une fois appuyer sur le boutton start : 
        $('.btn-11').on('click', function() {
            $('#my-input').val('Nouvelle valeur');
        });

        // Comment attache de nouveaux éléments à notre HTML :
            
            // Ajouter à notre div (de classe .jquery-html) un nouveau paragraphe une fois appuyer sur le boutton start : 
                $('.btn-11').on('click', function() {
                    $('.jquery-html').append('<p>Nouvelle div ici toute fraiche à la fin de notre div</p>'); // function .append permet un ajout de text ou autre en html mais à la fin de notre div. Ne pas oublier les TAGS HTML !important
                });

                // .append avec tag h1 test :
                $('.btn-11').on('click', function() {
                    $('.jquery-html').append('<h1>TEST NOUVEAU TITRE à la fin de notre div</h1>');
                });

                // Function .prepend ajoute aussi du text ou autre en html mais lui par contre au début de notre div. Ne pas oublier les TAGS HTML !important
                $('.btn-11').on('click', function() {
                    $('.jquery-html').prepend('<p>Nouvelle div ici toute fraiche mais au début de notre div</p');
                });

                // .prepend avec tag h1 test :
                $('.btn-11').on('click', function() {
                    $('.jquery-html').prepend('<h1>TEST NOUVEAU TITRE mais au début de notre div</h1>');
                });

                // Function .after permet d'ajouter du text ou autre en dehors de notre div mais aprés la div (de classe .jquery-html) :
                $('.btn-11').on('click', function() {
                    $('.jquery-html').after('Nouveau text qui se trouve en dehors de notre div mais APRÉS (de classe.jquery-html)');
                });

                // Function .before permet d'ajouter du text ou autre en dehors de notre div mais avant la div (de classe .jquery-html) :
                $('.btn-11').on('click', function() {
                    $('.jquery-html').before('Nouveau text qui se trouve en dehors de notre div mais AVANT (de classe.jquery-html)');
                });

        // Function .remove nous permet d'enlever un élément dans notre HTML, même dans l'onglet inspection de notre code sur le navigateur, il n'est plus visible :
                
            // Test sur notre paragraphe 3 (de classe p-jq-html-3) :
            $('.btn-11').on('click', function() {
                $('.p-jq-html-3').remove();
            });

            // Test sur notre premiére div (de classe .selectors) :
            $('.btn-11').on('click', function() {
                $('.selectors').remove();
            });

        // Function .empty nous permet d'enlever juste le contenu d'un div ou autre dans notre HTML :

            // test sur notre deuxiéme div (de classe .events) :
            $('.btn-11').on('click', function() {
                $('.events').empty();
            })


    // JQuery est CSS : 

        // Ajouter une classe CSS avec .addClass (qui est .red à la ligne 157 de notre feuille de style.css) à un de notre élément HTML à un moment donner avec JQuery:
        $('.btn-12').on('click', function() {
            $('.p-jq-css-1').addClass('red'); // .addClass ajoute a mon paragraphe 1 (de classe .p-jq-css-1) la couleur red qui est déclarer ligne 157 dans ma feuille de style.css.
        }); // ! IMPORTANT ! PAS BESOIN DE METTRE LE POINT '.' OU LE '#' POUR RÉCUPERER DU CSS PAR RAPPORT AU HTML.

        // Faire une fonction à plusieur sélecteur, que ce soit du html ou du css, exemple avec CSS :
        $('.btn-12').click(function() {
            $('.p-jq-css-2, .p-jq-css-3').addClass('blue');
        });

        // Faire une fonction et plusieurss style à plusieurs sélecteurs, que ce soit du html ou du css, exemple avec CSS :
        $('.btn-12').click(function() {
            $('.p-jq-css-2, .p-jq-css-3').addClass('blue, bold, size');
        });

        // Enlever une classe CSS avec .removeClass avec le button 'Start JQuery-CSS-2' (de classe .btn-13), je retire la couleur red sur le paragraphe 1 :
        $('.btn-13').click(function() {
            $('.p-jq-css-1').removeClass('red');
        });

        // Possibiliter (plus simple je trouve) d'unir .addClass et .removeClass avec la function toggleClass :
        // Ceci -> ('bold ++ size ++ center ++ green') permet d'ajouter ou de retirer plusieurs class CSS en même temps.
        $('.btn-14').click(function() {
            $('.p-jq-css-4, .p-jq-css-5').toggleClass('bold ++ size ++ center ++ green');
        });

        // Contrôler une propriéter CSS sans avoir besoin de déclarer ma class CSS dans notre feuille de style.css :
        $('.btn-14').click(function() {
            $('.p-jq-css-6').css('color', 'purple');
        });

        // Questionner un élément pour savoir sa couleur ou autre avec console.log() :
        $('.btn-14').click(function() {
            console.log($('.p-jq-css-7').css('color'));
        })

        // Changer plusieurs propriéter CSS d'un coup, on va donner un objet est qui dit objet, dit incollade {} À NE SURTOUT PAS OUBLIER :
        $('.btn-14').click(function() {
            $('.p-jq-css-8, .p-jq-css-9').css({
                // Déclarer les objets comme ceci (fonctionne) :
                color: 'white',
                fontSize: '40px',
                backgroundColor: 'black',
                textAlign: 'center',
                padding: '50px'
                // OU comme ceci (fonctionne aussi) :
                /**
                 *  'color': 'white',
                    'font-size': '40px',
                    'background-color': 'black',
                    'text-align': 'center',
                    'padding': '50px'
                 */ // AU CHOIX
            });
        });

        // Questionner la largeur et sa hauteur avec console.(log); de notre button (de class .btn-14), dimension en pixel (px) :
        $('.btn-15').click(function() {
            console.log($('.btn-15').width());
            console.log($('.btn-15').height());
        });

        // Changer la largeur de notre button (de class .btn-15) :
        $('.btn-15').click(function() {
            $('.btn-15').width(400);
        });

        // Changer la hauteur de notre button (de class .btn-15) :
        $('.btn-16').click(function() {
            $('.btn-16').height(200);
        });

        // Changer la largeur & sa hauteur de notre button (de class .btn-15) :
            // Deux façcons d'écrire la fonction : 
            $('.btn-17').click(function() {
                $('.btn-17').width(400);
                    $('.btn-17').height(200);
            });

            // OU :
            $('.btn-18').click(function() {
                $('.btn-18').width(400) && $('.btn-18').height(200);
            });

    
    // JQuery est l'arborescence des éléments :

        // Je change la couleurde la border de mon paragraphe 1 (de class .p-jq-arbo-1) dans ma div (de id #div-1) :
        $('#btn-arbo-1').on('click', function() {
            $('.p-jq-arbo-1').css('border-color', 'red');
        });

        // Maintenant je ne veux pas changer la couleur de la border de mon paragraphe 2 mais plutôt celle de son 'PARENT' qui est la 'DIV' (de id #div-1).
            // J'utilise la function .parent() :
            $('#btn-arbo-2').on('click', function() {
                $('.p-jq-arbo-2').parent().css('border-color', 'blue');
            });

        // Maintenant je ne veux pas changer la couleur de la border de mon paragraphe 3 mais plutôt celle de son 'PARENT' & de son 'GRAND-PARENT' (ancêtre). 
        // Qui est la 'DIV' (de id #div-1) pour le parent & la 'DIV' (de id #main) pour le grand-parent.
            // J'utilise la function .parents() :
            $('#btn-arbo-3').on('click', function() {
                $('.p-jq-arbo-3').parents().css('border-color', 'yellow');
            });

            // Pour changer que la couleur de la border du 'GRAND-PARENT', r'ajouter une class de n'importe quelle nom sur la div concerner.
            // Nous c'est la div (de id #main) avec une class ajouter (de class .special) :
            $('#btn-arbo-4').on('click', function() {
                $('.p-jq-arbo-4').parents('.special').css('border-color', 'purple');
            });

        // Au tour des 'ENFANTS' maintenant :
            // Je change la couleurde la border de mes trois paragraphes qui sont dans ma div-2 (de id #div-2) :
            $('#btn-arbo-5').on('click', function() {
                $('#div-2').children().css('border-color', 'grey');
            });

            // Je change la couleur de la border tout les descendants de notre main (de id #main),
            // Donc ce sont tout mes paragraphes qui sont dans la div-1 ( de id #div-1) et la div-2 (de id #div-2) :
            $('#btn-arbo-6').on('click', function() {
                $('#main').find('p').css('border-color', 'orange');
            });

        // Au tour des 'FRÉRES' maintenant :
            // Je change la couleur de la border des paragraphe 5 et 6 (de class .p-jq-arbo-5 & .p-jq-arbo-6) qui se trouve dans la div-2 (de id #div-2),
            // En passant par mon paragraphe 4 (de class .p-jq-arbo-4) car je veux utiliser la fonction frére qui est :
            $('#btn-arbo-7').on('click', function() {
                $('.p-jq-arbo-4').siblings().css('border-color', 'black');
            });

            // Je change la couleur de la border des paragraphe 5 (de class .p-jq-arbo-5) qui se trouve dans la div-2 (de id #div-2),
            // En passant par mon paragraphe 4 (de class .p-jq-arbo-4) car je veux utiliser la fonction frére qui est :
            $('#btn-arbo-8').on('click', function() {
                $('.p-jq-arbo-4').next().css('border-color', 'magenta');
            });

        // Je change la couleur de la border que du premier paragraphe dans ma div-3 (de id #div-3) :
        $('#btn-arbo-9').on('click', function() {
            $('.p-jq-arbo-7').first().css('border-color', 'pink');
        });

        // Je change la couleur de la border que du dernier paragraphe dans ma div-3 (de id #div-3) :
        $('#btn-arbo-10').on('click', function() {
            $('p').last().css('border-color', 'red');
        });

        // Je change la couleur de la border d'un paragraphe que je veux absolument comme un array par l'index (0, 1, 2, 3, ...) :
        // NE FONCTIONNE PAS ... :( 
        $('#btn-arbo-11').on('click', function() {
            $('p').eq(2).css('border-color', 'blue');
        });

        // Je change la couleur de la border d'un paragraphe en les filtrants, utiliser un class spécial de n'importe qu'elle nom (j'ai appeler ma class filter) :
        $('#btn-arbo-12').on('click', function() {
            $('p').filter('.filter').css('border-color', 'blue');
        });

            // Et le contraire de filter & .not au lieu de .filter : 
            $('#btn-arbo-13').on('click', function() {
                $('p').not('.filter').css('border-color', 'blue');
            });


    // DÉCOUVERTE RAPIDE D'AJAX (EN BREF): 

        // PERMET DE RÉCUPÉRER DES DONNÉES D'UN SERVEUR, DE LES AFFICHER DANS NOTRE PAGE WEB SANS FORCEMENT À AVOIR À RAFFRAICHIR NOTRE PAGE WEB.
        // JQuery va nous donner pas mal de fonction pour AJAX
        // Voici un bref exemple pour charger une page web sans à avoir à rafraichir une page web :
            $('#btn-ajax').on('click', function() {
                $('.div-ajax').load('demo-AJAX.txt');
            });


});