document.addEventListener('keydown', function(event) {
    if (event.keyCode === 39) { // Right arrow key
        console.log('Right arrow key detected');
        
        // Wait to ensure the button is loaded
        setTimeout(function() {
            // Find the "Next" button
            let buttons = document.querySelectorAll('button.btn');
            let nextButton = Array.from(buttons).find(button => button.textContent.includes('Next'));
            
            if (nextButton) {
                console.log('Next button found:', nextButton);
                
                // Extract URL from onclick attribute
                let onclickAttr = nextButton.getAttribute('onclick');
                if (onclickAttr) {
                    let match = onclickAttr.match(/self\.location='(.*?)'/);
                    if (match) {
                        console.log('Navigating to URL:', match[1]);
                        window.location.href = match[1]; // Direct navigation
                    } else {
                        console.log('URL pattern not found in onclick attribute');
                    }
                } else {
                    console.log('No onclick attribute found');
                }
            } else {
                console.log('Next button not found');
            }
        }, 500);
    } else if (event.keyCode === 37) { // Left arrow key
        console.log('Left arrow key detected');
        
        // Wait to ensure the button is loaded
        setTimeout(function() {
            // Find the "Prev" button
            let buttons = document.querySelectorAll('button.btn');
            let prevButton = Array.from(buttons).find(button => button.textContent.includes('Prev'));
            
            if (prevButton) {
                console.log('Prev button found:', prevButton);
                
                // Extract URL from onclick attribute
                let onclickAttr = prevButton.getAttribute('onclick');
                if (onclickAttr) {
                    let match = onclickAttr.match(/self\.location='(.*?)'/);
                    if (match) {
                        console.log('Navigating to URL:', match[1]);
                        window.location.href = match[1]; // Direct navigation
                    } else {
                        console.log('URL pattern not found in onclick attribute');
                    }
                } else {
                    console.log('No onclick attribute found');
                }
            } else {
                console.log('Prev button not found');
            }
        }, 500);
    }
});
