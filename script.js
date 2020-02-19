window.addEventListener('load', function(){
    console.log('end of script');

    // Declared variables
    var colOne = document.getElementById('colOne');
    var colTwo = document.getElementById('colTwo');
    var colThree = document.getElementById('colThree');
    var colFour = document.getElementById('colFour');
    var accusation = [];
    var display = [];
    var friends = ['Bowser', 'Mario', 'Link', 'Caption Falcon', 'Wii Fit Trainer'];
    var locations = ['The Legend of Zelda Great Plateau Tower', 'Final Destination', 'Wii Fit Studio', 'Golden Plains', 'F-Zero Big Blue',
     'Earthbound Onett', "Princess Peach's Castle", 'Hyrule Castle', 'PictoChat 2', 'Nintendogs Living Room'];
    var weapons = ['Poke Ball', 'Fire Flower', 'Hammer', 'Bob-omb', 'Banana Peel',
     'Green Shell', 'Barrel', 'Golden Hammer', 'Star Rod', 'Beam Sword',
    'Fireball', 'Master Sword', 'Falcon Punch', 'Stretching', 'Shell Shock',
    'Cape', 'Gut punch', 'Giga Bowser Punch', 'Downward Dog', 'Shavasana'];
    
    

    // For loop creates h3's
    for(var i=0; i<101; i++){
       

        function outer(i){
            return function displayAlert(){
                var name = i%5;
                var item = i%10;
                var place = i%20;
                // alert('Accusation '+index+': I accuse '+friends[index]+', with the '
                // +weapons[index]+' in the '+locations[index]+'.');
                console.log('Accusation '+i+': I accuse '+friends[name]+', with the '
                +weapons[item]+' in the '+locations[place]+'.');
            };
        }

        // Creates h3's in four columns in html
        if(i>0){
            
            if(i<26){
                accusation[i] = document.createElement('h3');
                // accusation.textContent = 'Accusation ' + i;
                colOne.appendChild(accusation[i]);
            }else if(i<51){
                accusation[i] = document.createElement('h3');
                // accusation.textContent = 'Accusation ' + i;
                colTwo.appendChild(accusation[i]);
            }else if(i<76){
                accusation[i] = document.createElement('h3');
                // accusation.textContent = 'Accusation ' + i;
                colThree.appendChild(accusation[i]);
            }else{
                accusation[i] = document.createElement('h3');
                // accusation.textContent = 'Accusation ' + i;
                colFour.appendChild(accusation[i]);
            }
            // End of if/else statements

            accusation[i].textContent = 'Accusation ' + i;
            // display = outer();
            // console.log(display);
            accusation[i].addEventListener('click', outer(i));
        }
        // End of if statement
        
    }
    // End of for loop


        
})
