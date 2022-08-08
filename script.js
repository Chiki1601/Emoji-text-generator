new Vue({
  el: '#app',
  data() {
    return {
      text: '',
      result: [],
      pointer: 0,
      background: '⚪️',  // copy your background emoji here!
      main: '⚫️',  // copy background main emoji here!
      height: 20
    }
  },
  created() {
    this.text = 'Hi there!';
    this.buildResult();
    
    setTimeout(function() {
      this.text = 'Now you!';
      this.buildResult();
      
      setTimeout(function() {
        this.text = '';
        this.buildResult();
      }.bind(this), 2000);
      
    }.bind(this), 2000);
  },
  methods: {
    initArray() { // reset array and build main structure
      this.result = [];
      let textSplit = this.text.split('');
      
      for(let i = 0; i < textSplit.length; i++) {
        for(let i = 0; i < this.height; i++) {
          this.result.push([]);
        }
      }
    },
    buildResult() {
      this.initArray();
    
      // split for every char
      let textSplit = this.text.split('');
      
      for(let i = 0; i < textSplit.length; i++) {
        
        // get letter formatting
        let format = this.getLetter(textSplit[i]);
        
        // parse letter
        for(let j = 0; j < format.length; j++) {  // row
          
          let formatSplit = format[j].toString().split('');
            
          for(let k = 0; k < formatSplit.length; k++) { // col
             
            // parse correct emoji
            if(formatSplit[k] == 'O') {
              this.result[j][this.pointer] = this.background; 
            } else if(formatSplit[k] == 'X') {
              this.result[j][this.pointer] = this.main; 
            }
           
            this.pointer++;
            
            // manually add space
            this.result[j][this.pointer] = this.background; 
          }
        }
        
      }
    },
    getLetter(letter) {
      switch(letter) {
        case '':
           return [
            ['OO'],
            ['OO'],
            ['OO'],
            ['OO'],
            ['OO'],
          ];
          break;
        case 'a':
        case 'A':
          return [
            ['XXX'],
            ['XOX'],
            ['XXX'],
            ['XOX'],
            ['XOX'],
          ];
          break;
        case 'b':
        case 'B':
          return [
            ['XXO'],
            ['XOX'],
            ['XXO'],
            ['XOX'],
            ['XXO'],
          ];
          break;
        case 'c':
        case 'C':
          return [
            ['XXX'],
            ['XOO'],
            ['XOO'],
            ['XOO'],
            ['XXX'],
          ];
          break;
        case 'd':
        case 'D':
          return [
            ['XXO'],
            ['XOX'],
            ['XOX'],
            ['XOX'],
            ['XXO'],
          ];
          break;
        case 'e':
        case 'E':
          return [
            ['XXX'],
            ['XOO'],
            ['XXX'],
            ['XOO'],
            ['XXX'],
          ];
          break;
        case 'f':
        case 'F':
          return [
            ['XXX'],
            ['XOO'],
            ['XXO'],
            ['XOO'],
            ['XOO'],
          ];
          break;
        case 'g':
        case 'G':
          return [
            ['XXXX'],
            ['XOOO'],
            ['XOXX'],
            ['XOOX'],
            ['XXXX'],
          ];
          break;
        case 'h':
        case 'H':
          return [
            ['XOX'],
            ['XOX'],
            ['XXX'],
            ['XOX'],
            ['XOX'],
          ];
          break;
        case 'i':
        case 'I':
          return [
            ['X'],
            ['O'],
            ['X'],
            ['X'],
            ['X'],
          ];
          break;
        case 'j':
        case 'J':
          return [
            ['XXX'],
            ['OOX'],
            ['OOX'],
            ['OOX'],
            ['XXO'],
          ];
          break;
        case 'k':
        case 'K':
          return [
            ['XOX'],
            ['XOX'],
            ['XXO'],
            ['XOX'],
            ['XOX'],
          ];
          break;
        case 'l':
        case 'L':
          return [
            ['XOO'],
            ['XOO'],
            ['XOO'],
            ['XOO'],
            ['XXX'],
          ];
          break;
        case 'm':
        case 'M':
          return [
            ['XOOX'],
            ['XXXX'],
            ['XXXX'],
            ['XOOX'],
            ['XOOX'],
          ];
          break;
        case 'n':
        case 'N':
          return [
            ['XOOX'],
            ['XXOX'],
            ['XOXX'],
            ['XOOX'],
            ['XOOX'],
          ];
          break;
        case 'o':
        case 'O':
          return [
            ['XXXX'],
            ['XOOX'],
            ['XOOX'],
            ['XOOX'],
            ['XXXX'],
          ];
          break;
        case 'p':
        case 'P':
          return [
            ['XXX'],
            ['XOX'],
            ['XXX'],
            ['XOO'],
            ['XOO'],
          ];
          break;
        case 'q':
        case 'Q':
          return [
            ['XXXX'],
            ['XOOX'],
            ['XXOX'],
            ['XOXX'],
            ['OXXX'],
          ];
          break;
        case 'r':
        case 'R':
          return [
            ['XXX'],
            ['XOX'],
            ['XXX'],
            ['XXO'],
            ['XOX'],
          ];
          break;
        case 's':
        case 'S':
          return [
            ['XXX'],
            ['XOO'],
            ['XXX'],
            ['OOX'],
            ['XXX'],
          ];
          break;
        case 't':
        case 'T':
          return [
            ['XXX'],
            ['OXO'],
            ['OXO'],
            ['OXO'],
            ['OXO'],
          ];
          break;
        case 'u':
        case 'U':
          return [
            ['XOX'],
            ['XOX'],
            ['XOX'],
            ['XOX'],
            ['XXX'],
          ];
          break;
        case 'v':
        case 'V':
          return [
            ['XOX'],
            ['XOX'],
            ['XOX'],
            ['XOX'],
            ['OXO'],
          ];
          break;
        case 'w':
        case 'W':
          return [
            ['XOXOX'],
            ['XOXOX'],
            ['XOXOX'],
            ['OXOXO'],
            ['OXOXO'],
          ];
          break;
        case 'x':
        case 'X':
          return [
            ['XOX'],
            ['XOX'],
            ['OXO'],
            ['XOX'],
            ['XOX'],
          ];
          break;
        case 'y':
        case 'Y':
          return [
            ['XOX'],
            ['XOX'],
            ['OXO'],
            ['OXO'],
            ['OXO'],
          ];
          break;
        case 'z':
        case 'Z':
          return [
            ['XXX'],
            ['OOX'],
            ['OXO'],
            ['XOO'],
            ['XXX'],
          ];
          break;
        case '0':
          return [
            ['XXX'],
            ['XOX'],
            ['XOX'],
            ['XOX'],
            ['XXX'],
          ];
          break;
        case '1':
          return [
            ['OXX'],
            ['XXX'],
            ['OOX'],
            ['OOX'],
            ['OOX'],
          ];
          break;
        case '2':
          return [
            ['XXX'],
            ['OOX'],
            ['XXX'],
            ['XOO'],
            ['XXX'],
          ];
          break;
        case '3':
          return [
            ['XXX'],
            ['OOX'],
            ['XXX'],
            ['OOX'],
            ['XXX'],
          ];
          break;
        case '4':
          return [
            ['XOO'],
            ['XOX'],
            ['XXX'],
            ['OOX'],
            ['OOX'],
          ];
          break;
        case '5':
          return [
            ['XXX'],
            ['XOO'],
            ['XXO'],
            ['OOX'],
            ['XXX'],
          ];
          break;
        case '6':
          return [
            ['XXX'],
            ['XOO'],
            ['XXX'],
            ['XOX'],
            ['XXX'],
          ];
          break;
        case '7':
          return [
            ['XXX'],
            ['OOX'],
            ['OOX'],
            ['OXO'],
            ['OXO'],
          ];
          break;
        case '8':
          return [
            ['XXX'],
            ['XOX'],
            ['XXX'],
            ['XOX'],
            ['XXX'],
          ];
          break;
        case '9':
          return [
            ['XXX'],
            ['XOX'],
            ['XXX'],
            ['OOX'],
            ['XXX'],
          ];
          break;
        case '!':
          return [
            ['X'],
            ['X'],
            ['X'],
            ['O'],
            ['X'],
          ];
          break;
        case '?':
          return [
            ['XXX'],
            ['OOX'],
            ['OXX'],
            ['OOO'],
            ['OXO'],
          ];
          break;
        case '.':
          return [
            ['O'],
            ['O'],
            ['O'],
            ['O'],
            ['X'],
          ];
          break;
        case ',':
          return [
            ['O'],
            ['O'],
            ['O'],
            ['X'],
            ['X'],
          ];
          break;
        case '_':
          return [
            ['OOO'],
            ['OOO'],
            ['OOO'],
            ['OOO'],
            ['XXX'],
          ];
          break;
        case '-':
          return [
            ['OOO'],
            ['OOO'],
            ['XXX'],
            ['OOO'],
            ['OOO'],
          ];
          break;
        case '+':
          return [
            ['OOO'],
            ['OXO'],
            ['XXX'],
            ['OXO'],
            ['OOO'],
          ];
          break;
        case '#':
          return [
            ['OXOXO'],
            ['XXXXX'],
            ['OXOXO'],
            ['XXXXX'],
            ['OXOXO'],
          ];
          break;
        default:
           return [
            ['O'],
            ['O'],
            ['O'],
            ['O'],
            ['O'],
          ];
          break;
      }
    }
  }
})