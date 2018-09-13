var movies = [
    'Spider-man',
    'Pretty Woman',
    'Wonder-woman'];

// movies[3]=' Bridesmaids';
// movies[0]='Avengers';
// movies[2]='The jackass';
function workwithmovies() {
    if (20 < 30) {
        return movies[3] = 'Bridesmaids';
    }
    else if (30 > 100) {
        return movies[0] = 'Avengers';
    }
    else if (10 < 1) {
        return movies[2] = 'The Jackass';
    }
}


var txt = workwithmovies.toString();
