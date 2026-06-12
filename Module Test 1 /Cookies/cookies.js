// Cookies are small pieces of data (key-value pairs) stored in browsers by websites to remember information between page loads. 
// ~4KB at max -> analytics, session management, personalization, performance 

// username=Nitin; expires=Fri, 5 Jun 2026 12:00:00 UTC; path=/; Secure; HttpOnly

// A cookie is a text file, stored in the browser, bound by domain and path rules.

// Attributes 

// key-value pairs , with semicolon seperated values
// expires = set cookie expiry (GMT), without this cookie is a session cookie 
// path = URL where the cookie will be accessible 
// domain = which domain can access the cookie 
// secure = in this case cookie will only be sent using HTTPS 
// HttpOnly = this will make the cookie inaccessible by javascript -> html only or server only - prevents XSS attacks 
// SameSite -> CSRF avoid -> basically securely ensures that only the same site that created the cookie can access it 

document.cookie="userName=CheemaY; theme=dark; lang=english; area=puraniDilli";

function getValue(key){
    const ans = document.cookie.split("; ")
                .find(row=> row.startsWith(key+'='))
                .split('=')[1]??null;
    
                return ans;
}

// getValue('userName') -> cheemaY


// Write atleast 3 differences between
// Cookies, localStorage and sessionStorage
    // 4Kb,   5-10MB, 5-10MB
    // Manual , persistent, cleaned when tab closes
    // httpOnly, no sec, no sec
    // communication, local. local