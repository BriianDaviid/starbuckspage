
        function imgSlider(anything){
            var img = document.querySelector('.starbucks');
            document.querySelector('.starbucks').src = 'img/' + anything;
        }


        function changeCircleColor(color){
            var btnLearMore = document.querySelector('.btnLearMore')
            var colorStarbucks = document.querySelector('.colorStarbucks');
            var circle = document.querySelector('.circle');


            circle.style.background = color;
            colorStarbucks.style.color = circle.style.background ;
            btnLearMore.style.background = circle.style.background;


        }
