describe("angular.directive", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive");
  });

});

describe("angular.attrMarkup", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.attrMarkup");
  });

});

describe("angular.element", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.element");
  });

});

describe("angular.filter", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter");
  });

  it('should reverse text', function(){
    expect(binding('text|reverse')).toEqual('olleh');
    input('text').enter('ABC');
    expect(binding('text|reverse')).toEqual('CBA');
  });

});

describe("angular.formatter", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter");
  });

  it('should store reverse', function(){
   expect(element('.doc-example-live input:first').val()).toEqual('angular');
   expect(element('.doc-example-live input:last').val()).toEqual('RALUGNA');
  
   this.addFutureAction('change to XYZ', function($window, $document, done){
     $document.elements('.doc-example-live input:last').val('XYZ').trigger('change');
     done();
   });
   expect(element('.doc-example-live input:first').val()).toEqual('zyx');
  });

});

describe("angular.markup", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.markup");
  });

});

describe("angular.validator", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator");
  });

    it('should validate the default number string', function() {
      expect(element('input[name=number]').attr('class')).
         not().toMatch(/ng-validation-error/);
    });
    it('should not validate "foo"', function() {
      input('number').enter('foo');
      expect(element('input[name=number]').attr('class')).
         toMatch(/ng-validation-error/);
    });

  it('should validate correct UPS tracking number', function() {
    expect(element('input[name=trackNo]').attr('class')).
       not().toMatch(/ng-validation-error/);
  });
  
  it('should not validate in correct UPS tracking number', function() {
    input('trackNo').enter('foo');
    expect(element('input[name=trackNo]').attr('class')).
       toMatch(/ng-validation-error/);
  });

});

describe("angular.service", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service");
  });

  it('should test service', function(){
    expect(element(':input[name=message]').val()).toEqual('test');
  });

});

describe("angular", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular");
  });

});

describe("angular.widget", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget");
  });

  

});

describe("cookbook.buzz", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook.buzz");
  });

   it('fetch buzz and expand', function(){
     element(':button:contains(fetch)').click();
     expect(repeater('div.buzz').count()).toBeGreaterThan(0);
     element('.buzz a:contains(Expand replies):first').click();
     expect(repeater('div.reply').count()).toBeGreaterThan(0);
   });

});

describe("cookbook.form", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook.form");
  });

   it('should show debug', function(){
     expect(binding('user')).toMatch(/John Smith/);
   });
   it('should add contact', function(){
     using('.example').element('a:contains(add)').click();
     using('.example div:last').input('contact.value').enter('you@example.org');
     expect(binding('user')).toMatch(/\(234\) 555\-1212/);
     expect(binding('user')).toMatch(/you@example.org/);
   });
  
   it('should remove contact', function(){
     using('.example').element('a:contains(X)').click();
     expect(binding('user')).not().toMatch(/\(234\) 555\-1212/);
   });
  
   it('should validate zip', function(){
     expect(using('.example').element(':input[name=user.address.zip]').attr('className'))
       .not().toMatch(/ng-validation-error/)
  
     using('.example').input('user.address.zip').enter('abc');
  
     expect(using('.example').element(':input[name=user.address.zip]').attr('className'))
       .toMatch(/ng-validation-error/)
   });
  
   it('should validate state', function(){
     expect(using('.example').element(':input[name=user.address.state]').attr('className'))
       .not().toMatch(/ng-validation-error/)
  
     using('.example').input('user.address.state').enter('XXX');
  
     expect(using('.example').element(':input[name=user.address.state]').attr('className'))
       .toMatch(/ng-validation-error/)
   });

});

describe("cookbook.formadvanced", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook.formadvanced");
  });

   it('should enable save button', function(){
     expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
     input('form.name').enter('');
     expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
     input('form.name').enter('change');
     expect(element(':button:contains(Save)').attr('disabled')).toBeFalsy();
     element(':button:contains(Save)').click();
     expect(element(':button:contains(Save)').attr('disabled')).toBeTruthy();
   });
   it('should enable cancel button', function(){
     expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
     input('form.name').enter('change');
     expect(element(':button:contains(Cancel)').attr('disabled')).toBeFalsy();
     element(':button:contains(Cancel)').click();
     expect(element(':button:contains(Cancel)').attr('disabled')).toBeTruthy();
     expect(element(':input[name=form.name]').val()).toEqual('John Smith');
   });

});

describe("contribute", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!contribute");
  });

});

describe("cookbook.helloworld", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook.helloworld");
  });

  it('should change the binding when user enters text', function(){
    expect(binding('name')).toEqual('World');
    input('name').enter('angular');
    expect(binding('name')).toEqual('angular');
  });

});

describe("cookbook.deeplinking", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook.deeplinking");
  });

    it('should navigate to URL', function(){
     element('a:contains(Welcome)').click();
     expect(element('ng\\:view').text()).toMatch(/Hello anonymous/);
     element('a:contains(Settings)').click();
     input('form.name').enter('yourname');
     element(':button:contains(Save)').click();
     element('a:contains(Welcome)').click();
     expect(element('ng\\:view').text()).toMatch(/Hello yourname/);
    });

});

describe("cookbook", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook");
  });

});

describe("downloading", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!downloading");
  });

});

describe("faq", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!faq");
  });

});

describe("guide.css", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.css");
  });

});

describe("cookbook.mvc", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!cookbook.mvc");
  });

    it('should play a game', function(){
     piece(1, 1);
     expect(binding('nextMove')).toEqual('O');
     piece(3, 1);
     expect(binding('nextMove')).toEqual('X');
     piece(1, 2);
     piece(3, 2);
     piece(1, 3);
     expect(element('.winner').text()).toEqual('Player X has won!');
    });
  
    function piece(row, col) {
      element('.board tr:nth-child('+row+') td:nth-child('+col+')').click();
    }

});

describe("guide.di", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.di");
  });

});

describe("guide.compiler", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.compiler");
  });

});

describe("guide", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide");
  });

});

describe("guide.bootstrap", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.bootstrap");
  });

});

describe("guide.template", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.template");
  });

});

describe("guide.testing", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.testing");
  });

});

describe("guide.data-binding", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.data-binding");
  });

});

describe("guide.expression", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.expression");
  });

   it('should calculate expression in binding', function(){
     expect(binding('1+2')).toEqual('3');
   });

   it('should allow user expression testing', function(){
      element('.expressions :button').click();
      var li = using('.expressions ul').repeater('li');
      expect(li.count()).toBe(1);
      expect(li.row(0)).toEqual(["3*10|currency", "$30.00"]);
   });

   it('should calculate expression in binding', function(){
     var alertText;
     this.addFutureAction('set mock', function($window, $document, done) {
       $window.mockWindow = {
         alert: function(text){ alertText = text; }
       };
       done();
     });
     element(':button:contains(Greet)').click();
     expect(this.addFuture('alert text', function(done) {
       done(null, alertText);
     })).toBe('Hello World');
   });

   it('should filter the list', function(){
      var tr = using('table.example3').repeater('tr.ng-attr-widget');
      expect(tr.count()).toBe(5);
      input('searchText').enter('a');
      expect(tr.count()).toBe(2);
  
   });

});

describe("angular.mock", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.mock");
  });

});

describe("angular.mock.service.$browser", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.mock.service.$browser");
  });

});

describe("angular.mock.service.$exceptionHandler", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.mock.service.$exceptionHandler");
  });

});

describe("angular.mock.service.$log", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.mock.service.$log");
  });

});

describe("angular.service.$browser", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$browser");
  });

});

describe("angular.lowercase", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.lowercase");
  });

});

describe("angular.uppercase", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.uppercase");
  });

});

describe("angular.forEach", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.forEach");
  });

});

describe("angular.extend", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.extend");
  });

});

describe("angular.noop", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.noop");
  });

});

describe("angular.identity", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.identity");
  });

});

describe("angular.isUndefined", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isUndefined");
  });

});

describe("angular.isDefined", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isDefined");
  });

});

describe("angular.isObject", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isObject");
  });

});

describe("angular.isString", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isString");
  });

});

describe("angular.isNumber", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isNumber");
  });

});

describe("angular.isDate", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isDate");
  });

});

describe("angular.isArray", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isArray");
  });

});

describe("angular.isFunction", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.isFunction");
  });

});

describe("angular.Object.size", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Object.size");
  });

  it('should print correct sizes for an array and an object', function() {
    expect(binding('[1,2].$size()')).toBe('2');
    expect(binding('{a:1, b:2, c:3}.$size()')).toBe('3');
  });

});

describe("angular.Object.copy", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Object.copy");
  });

  it('should print that initialy the form object is NOT equal to master', function() {
    expect(element('.doc-example-live input[name=master.salutation]').val()).toBe('Hello');
    expect(element('.doc-example-live input[name=master.name]').val()).toBe('world');
    expect(element('.doc-example-live span').css('display')).toBe('inline');
  });
  
  it('should make form and master equal when the copy button is clicked', function() {
    element('.doc-example-live button').click();
    expect(element('.doc-example-live span').css('display')).toBe('none');
  });

});

describe("angular.Object.equals", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Object.equals");
  });

  it('should print that initialy greeting is equal to the hardcoded value object', function() {
    expect(element('.doc-example-live input[name=greeting.salutation]').val()).toBe('Hello');
    expect(element('.doc-example-live input[name=greeting.name]').val()).toBe('world');
    expect(element('.doc-example-live span').css('display')).toBe('none');
  });
  
  it('should say that the objects are not equal when the form is modified', function() {
    input('greeting.name').enter('kitty');
    expect(element('.doc-example-live span').css('display')).toBe('inline');
  });

});

describe("angular.bind", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.bind");
  });

});

describe("angular.directive.ng:autobind", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:autobind");
  });

});

describe("angular.Object", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Object");
  });

});

describe("angular.Array", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array");
  });

});

describe("angular.Array.indexOf", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.indexOf");
  });

  it('should correctly calculate the initial index', function() {
    expect(binding('books.$indexOf(bookName)')).toBe('2');
  });
  
  it('should recalculate', function() {
    input('bookName').enter('foo');
    expect(binding('books.$indexOf(bookName)')).toBe('-1');
  
    input('bookName').enter('Moby Dick');
    expect(binding('books.$indexOf(bookName)')).toBe('0');
  });

});

describe("angular.Array.sum", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.sum");
  });

  //TODO: these specs are lame because I had to work around issues #164 and #167
  it('should initialize and calculate the totals', function() {
    expect(repeater('.doc-example-live table tr', 'item in invoice.items').count()).toBe(3);
    expect(repeater('.doc-example-live table tr', 'item in invoice.items').row(1)).
      toEqual(['$99.50']);
    expect(binding("invoice.items.$sum('qty*cost')")).toBe('$99.50');
    expect(binding("invoice.items.$sum('qty*cost')")).toBe('$99.50');
  });
  
  it('should add an entry and recalculate', function() {
    element('.doc-example-live a:contains("add item")').click();
    using('.doc-example-live tr:nth-child(3)').input('item.qty').enter('20');
    using('.doc-example-live tr:nth-child(3)').input('item.cost').enter('100');
  
    expect(repeater('.doc-example-live table tr', 'item in invoice.items').row(2)).
      toEqual(['$2,000.00']);
    expect(binding("invoice.items.$sum('qty*cost')")).toBe('$2,099.50');
  });

});

describe("angular.Array.remove", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.remove");
  });

  it('should initialize the task list with for tasks', function() {
    expect(repeater('.doc-example-live ul li', 'task in tasks').count()).toBe(4);
    expect(repeater('.doc-example-live ul li', 'task in tasks').column('task')).
      toEqual(['Learn Angular', 'Read Documentation', 'Check out demos',
               'Build cool applications']);
  });
  
  it('should initialize the task list with for tasks', function() {
    element('.doc-example-live ul li a:contains("X"):first').click();
    expect(repeater('.doc-example-live ul li', 'task in tasks').count()).toBe(3);
  
    element('.doc-example-live ul li a:contains("X"):last').click();
    expect(repeater('.doc-example-live ul li', 'task in tasks').count()).toBe(2);
  
    expect(repeater('.doc-example-live ul li', 'task in tasks').column('task')).
      toEqual(['Read Documentation', 'Check out demos']);
  });

});

describe("angular.Array.filter", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.filter");
  });

  it('should search across all fields when filtering with a string', function() {
    input('searchText').enter('m');
    expect(repeater('#searchTextResults tr', 'friend in friends').column('name')).
      toEqual(['Mary', 'Mike', 'Adam']);
  
    input('searchText').enter('76');
    expect(repeater('#searchTextResults tr', 'friend in friends').column('name')).
      toEqual(['John', 'Julie']);
  });
  
  it('should search in specific fields when filtering with a predicate object', function() {
    input('search.$').enter('i');
    expect(repeater('#searchObjResults tr', 'friend in friends').column('name')).
      toEqual(['Mary', 'Mike', 'Julie']);
  });

});

describe("angular.Array.add", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.add");
  });

    beforeEach(function() {
       expect(binding('people')).toBe('people = []');
    });
  
    it('should create an empty record when "add empty" is clicked', function() {
      element('.doc-example-live a:contains("add empty")').click();
      expect(binding('people')).toBe('people = [{\n  "name":"",\n  "sex":null}]');
    });
  
    it('should create a "John" record when "add \'John\'" is clicked', function() {
      element('.doc-example-live a:contains("add \'John\'")').click();
      expect(binding('people')).toBe('people = [{\n  "name":"John",\n  "sex":"male"}]');
    });
  
    it('should create a "Mary" record when "add \'Mary\'" is clicked', function() {
      element('.doc-example-live a:contains("add \'Mary\'")').click();
      expect(binding('people')).toBe('people = [{\n  "name":"Mary",\n  "sex":"female"}]');
    });
  
    it('should delete a record when "X" is clicked', function() {
       element('.doc-example-live a:contains("add empty")').click();
       element('.doc-example-live li a:contains("X"):first').click();
       expect(binding('people')).toBe('people = []');
    });

});

describe("angular.Array.count", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.count");
  });

  it('should calculate counts', function() {
    expect(binding('items.$count(\'points==1\')')).toEqual(2);
    expect(binding('items.$count(\'points>1\')')).toEqual(1);
  });
  
  it('should recalculate when updated', function() {
    using('.doc-example-live li:first-child').input('item.points').enter('23');
    expect(binding('items.$count(\'points==1\')')).toEqual(1);
    expect(binding('items.$count(\'points>1\')')).toEqual(2);
  });

});

describe("angular.Array.orderBy", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.orderBy");
  });

  it('should be reverse ordered by aged', function() {
    expect(binding('predicate')).toBe('Sorting predicate = -age');
    expect(repeater('.doc-example-live table', 'friend in friends').column('friend.age')).
      toEqual(['35', '29', '21', '19', '10']);
    expect(repeater('.doc-example-live table', 'friend in friends').column('friend.name')).
      toEqual(['Adam', 'Julie', 'Mike', 'Mary', 'John']);
  });
  
  it('should reorder the table when user selects different predicate', function() {
    element('.doc-example-live a:contains("Name")').click();
    expect(repeater('.doc-example-live table', 'friend in friends').column('friend.name')).
      toEqual(['Adam', 'John', 'Julie', 'Mary', 'Mike']);
    expect(repeater('.doc-example-live table', 'friend in friends').column('friend.age')).
      toEqual(['35', '10', '29', '19', '21']);
  
    element('.doc-example-live a:contains("Phone")+a:contains("^")').click();
    expect(repeater('.doc-example-live table', 'friend in friends').column('friend.phone')).
      toEqual(['555-9876', '555-8765', '555-5678', '555-4321', '555-1212']);
    expect(repeater('.doc-example-live table', 'friend in friends').column('friend.name')).
      toEqual(['Mary', 'Julie', 'Adam', 'Mike', 'John']);
  });

});

describe("angular.Array.limitTo", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.Array.limitTo");
  });

  it('should limit the numer array to first three items', function() {
    expect(element('.doc-example-live input[name=limit]').val()).toBe('3');
    expect(binding('numbers.$limitTo(limit) | json')).toEqual('[1,2,3]');
  });
  
  it('should update the output when -3 is entered', function() {
    input('limit').enter(-3);
    expect(binding('numbers.$limitTo(limit) | json')).toEqual('[7,8,9]');
  });

});

describe("guide.overview", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!guide.overview");
  });

  it('should show of angular binding', function(){
    expect(binding('qty * cost')).toEqual('$19.95');
    input('qty').enter('2');
    input('cost').enter('5.00');
    expect(binding('qty * cost')).toEqual('$10.00');
  });

});

describe("angular.compile", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.compile");
  });

});

describe("angular.directive.ng:eval-order", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:eval-order");
  });

  it('should check ng:format', function(){
    expect(using('.doc-example-live div:first').binding("items.$sum('total')")).toBe('$9.99');
    expect(using('.doc-example-live div:last').binding("items.$sum('total')")).toBe('$9.99');
    input('item.qty').enter('2');
    expect(using('.doc-example-live div:first').binding("items.$sum('total')")).toBe('$9.99');
    expect(using('.doc-example-live div:last').binding("items.$sum('total')")).toBe('$19.98');
  });

});

describe("angular.filter.currency", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.currency");
  });

  it('should init with 1234.56', function(){
    expect(binding('amount | currency')).toBe('$1,234.56');
  });
  it('should update', function(){
    input('amount').enter('-1234');
    expect(binding('amount | currency')).toBe('$-1,234.00');
    expect(element('.doc-example-live .ng-binding').attr('className')).
      toMatch(/ng-format-negative/);
  });

});

describe("angular.filter.number", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.number");
  });

  it('should format numbers', function(){
    expect(binding('val | number')).toBe('1,234.57');
    expect(binding('val | number:0')).toBe('1,235');
    expect(binding('-val | number:4')).toBe('-1,234.5679');
  });
  
  it('should update', function(){
    input('val').enter('3374.333');
    expect(binding('val | number')).toBe('3,374.33');
    expect(binding('val | number:0')).toBe('3,374');
    expect(binding('-val | number:4')).toBe('-3,374.3330');
  });

});

describe("angular.filter.date", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.date");
  });

  it('should format date', function(){
    expect(binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).
       toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} \-?\d{4}/);
    expect(binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).
       toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(am|pm)/);
  });

});

describe("angular.filter.json", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.json");
  });

  it('should jsonify filtered objects', function() {
    expect(binding('obj | json')).toBe('{\n  "a":1,\n  "b":[]}');
  });
  
  it('should update', function() {
    input('objTxt').enter('[1, 2, 3]');
    expect(binding('obj | json')).toBe('[1,2,3]');
  });

});

describe("angular.filter.lowercase", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.lowercase");
  });

});

describe("angular.filter.uppercase", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.uppercase");
  });

});

describe("angular.filter.html", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.html");
  });

  it('should sanitize the html snippet ', function(){
    expect(using('#html-filter').binding('snippet | html')).
      toBe('<p>an html\n<em>click here</em>\nsnippet</p>');
  });
  
  it('should escape snippet without any filter', function() {
    expect(using('#escaped-html').binding('snippet')).
      toBe("&lt;p style=\"color:blue\"&gt;an html\n" +
           "&lt;em onmouseover=\"this.textContent='PWN3D!'\"&gt;click here&lt;/em&gt;\n" +
           "snippet&lt;/p&gt;");
  });
  
  it('should inline raw snippet if filtered as unsafe', function() {
    expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).
      toBe("<p style=\"color:blue\">an html\n" +
           "<em onmouseover=\"this.textContent='PWN3D!'\">click here</em>\n" +
           "snippet</p>");
  });
  
  it('should update', function(){
    input('snippet').enter('new <b>text</b>');
    expect(using('#html-filter').binding('snippet | html')).toBe('new <b>text</b>');
    expect(using('#escaped-html').binding('snippet')).toBe("new &lt;b&gt;text&lt;/b&gt;");
    expect(using('#html-unsafe-filter').binding("snippet | html:'unsafe'")).toBe('new <b>text</b>');
  });

});

describe("angular.filter.linky", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.filter.linky");
  });

    it('should linkify the snippet with urls', function(){
      expect(using('#linky-filter').binding('snippet | linky')).
        toBe('Pretty text with some links:\n' +
             '<a href="http://angularjs.org/">http://angularjs.org/</a>,\n' +
             '<a href="mailto:us@somewhere.org">us@somewhere.org</a>,\n' +
             '<a href="mailto:another@somewhere.org">another@somewhere.org</a>,\n' +
             'and one more: <a href="ftp://127.0.0.1/">ftp://127.0.0.1/</a>.');
    });
  
    it ('should not linkify snippet without the linky filter', function() {
      expect(using('#escaped-html').binding('snippet')).
        toBe("Pretty text with some links:\n" +
             "http://angularjs.org/,\n" +
             "mailto:us@somewhere.org,\n" +
             "another@somewhere.org,\n" +
             "and one more: ftp://127.0.0.1/.");
    });
  
    it('should update', function(){
      input('snippet').enter('new http://link.');
      expect(using('#linky-filter').binding('snippet | linky')).
        toBe('new <a href="http://link">http://link</a>.');
      expect(using('#escaped-html').binding('snippet')).toBe('new http://link.');
    });

});

describe("angular.directive.ng:init", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:init");
  });

    it('should check greeting', function(){
      expect(binding('greeting')).toBe('Hello');
      expect(binding('person')).toBe('World');
    });

});

describe("angular.directive.ng:controller", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:controller");
  });

    it('should check controller', function(){
      expect(element('.doc-example-live div>:input').val()).toBe('John Smith');
      expect(element('.doc-example-live li[ng\\:repeat-index="0"] input').val()).toBe('408 555 1212');
      expect(element('.doc-example-live li[ng\\:repeat-index="1"] input').val()).toBe('john.smith@example.org');
      element('.doc-example-live li:first a:contains("clear")').click();
      expect(element('.doc-example-live li:first input').val()).toBe('');
      element('.doc-example-live li:last a:contains("add")').click();
      expect(element('.doc-example-live li[ng\\:repeat-index="2"] input').val()).toBe('yourname@example.org');
    });

});

describe("angular.directive.ng:eval", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:eval");
  });

    it('should check eval', function(){
      expect(binding('obj.divide')).toBe('3');
      expect(binding('obj.updateCount')).toBe('2');
      input('obj.a').enter('12');
      expect(binding('obj.divide')).toBe('6');
      expect(binding('obj.updateCount')).toBe('3');
    });

});

describe("angular.directive.ng:bind", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:bind");
  });

    it('should check ng:bind', function(){
      expect(using('.doc-example-live').binding('name')).toBe('Whirled');
      using('.doc-example-live').input('name').enter('world');
      expect(using('.doc-example-live').binding('name')).toBe('world');
    });

});

describe("angular.directive.ng:bind-template", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:bind-template");
  });

    it('should check ng:bind', function(){
      expect(using('.doc-example-live').binding('{{salutation}} {{name}}')).
        toBe('Hello World!');
      using('.doc-example-live').input('salutation').enter('Greetings');
      using('.doc-example-live').input('name').enter('user');
      expect(using('.doc-example-live').binding('{{salutation}} {{name}}')).
        toBe('Greetings user!');
    });

});

describe("angular.directive.ng:bind-attr", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:bind-attr");
  });

    it('should check ng:bind-attr', function(){
      expect(using('.doc-example-live').element('a').attr('href')).
        toBe('http://www.google.com/search?q=AngularJS');
      using('.doc-example-live').input('query').enter('google');
      expect(using('.doc-example-live').element('a').attr('href')).
        toBe('http://www.google.com/search?q=google');
    });

});

describe("angular.directive.ng:click", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:click");
  });

  it('should check ng:click', function(){
    expect(binding('count')).toBe('0');
    element('.doc-example-live :button').click();
    expect(binding('count')).toBe('1');
  });

});

describe("angular.directive.ng:submit", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:submit");
  });

  it('should check ng:submit', function(){
    expect(binding('list')).toBe('list=[]');
    element('.doc-example-live form input').click();
    this.addFutureAction('submit from', function($window, $document, done) {
      $window.angular.element(
        $document.elements('.doc-example-live form')).
          trigger('submit');
      done();
    });
    expect(binding('list')).toBe('list=["hello"]');
  });

});

describe("angular.directive.ng:class", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:class");
  });

  it('should check ng:class', function(){
    expect(element('.doc-example-live span').attr('className')).not().
      toMatch(/ng-input-indicator-wait/);
  
    using('.doc-example-live').element(':button:first').click();
  
    expect(element('.doc-example-live span').attr('className')).
      toMatch(/ng-input-indicator-wait/);
  
    using('.doc-example-live').element(':button:last').click();
  
    expect(element('.doc-example-live span').attr('className')).not().
      toMatch(/ng-input-indicator-wait/);
  });

});

describe("angular.directive.ng:class-odd", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:class-odd");
  });

  it('should check ng:class-odd and ng:class-even', function(){
    expect(element('.doc-example-live li:first span').attr('className')).
      toMatch(/ng-format-negative/);
    expect(element('.doc-example-live li:last span').attr('className')).
      toMatch(/ng-input-indicator-wait/);
  });

});

describe("angular.directive.ng:class-even", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:class-even");
  });

  it('should check ng:class-odd and ng:class-even', function(){
    expect(element('.doc-example-live li:first span').attr('className')).
      toMatch(/ng-format-negative/);
    expect(element('.doc-example-live li:last span').attr('className')).
      toMatch(/ng-input-indicator-wait/);
  });

});

describe("angular.directive.ng:show", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:show");
  });

  it('should check ng:show / ng:hide', function(){
    expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
    expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
  
    input('checked').check();
  
    expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
    expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
  });

});

describe("angular.directive.ng:hide", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:hide");
  });

  it('should check ng:show / ng:hide', function(){
    expect(element('.doc-example-live span:first:hidden').count()).toEqual(1);
    expect(element('.doc-example-live span:last:visible').count()).toEqual(1);
  
    input('checked').check();
  
    expect(element('.doc-example-live span:first:visible').count()).toEqual(1);
    expect(element('.doc-example-live span:last:hidden').count()).toEqual(1);
  });

});

describe("angular.directive.ng:style", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:style");
  });

  it('should check ng:style', function(){
    expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
    element('.doc-example-live :button[value=set]').click();
    expect(element('.doc-example-live span').css('color')).toBe('red');
    element('.doc-example-live :button[value=clear]').click();
    expect(element('.doc-example-live span').css('color')).toBe('rgb(0, 0, 0)');
  });

});

describe("angular.injector", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.injector");
  });

});

describe("angular.formatter.json", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter.json");
  });

  it('should format json', function(){
    expect(binding('data')).toEqual('data={\n  \"name\":\"misko\",\n  \"project\":\"angular\"}');
    input('data').enter('{}');
    expect(binding('data')).toEqual('data={\n  }');
  });

});

describe("angular.formatter.boolean", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter.boolean");
  });

  it('should format boolean', function(){
    expect(binding('value')).toEqual('value=false');
    input('value').enter('truthy');
    expect(binding('value')).toEqual('value=true');
  });

});

describe("angular.formatter.number", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter.number");
  });

  it('should format numbers', function(){
    expect(binding('value')).toEqual('value=1234');
    input('value').enter('5678');
    expect(binding('value')).toEqual('value=5678');
  });

});

describe("angular.formatter.list", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter.list");
  });

  it('should format lists', function(){
    expect(binding('value')).toEqual('value=["chair","table"]');
    this.addFutureAction('change to XYZ', function($window, $document, done){
      $document.elements('.doc-example-live :input:last').val(',,a,b,').trigger('change');
      done();
    });
    expect(binding('value')).toEqual('value=["a","b"]');
  });

});

describe("angular.formatter.trim", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter.trim");
  });

  it('should format trim', function(){
    expect(binding('value')).toEqual('value="book"');
    this.addFutureAction('change to XYZ', function($window, $document, done){
      $document.elements('.doc-example-live :input:last').val('  text  ').trigger('change');
      done();
    });
    expect(binding('value')).toEqual('value="text"');
  });

});

describe("angular.formatter.index", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.formatter.index");
  });

  it('should retrieve object by index', function(){
    expect(binding('currentUser.password')).toEqual('guest');
    select('currentUser').option('2');
    expect(binding('currentUser.password')).toEqual('abc');
  });

});

describe("testimonials", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!testimonials");
  });

});

describe("started", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!started");
  });

});

describe("angular.directive.ng:href", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:href");
  });

});

describe("angular.directive.ng:src", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:src");
  });

});

describe("angular.toJson", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.toJson");
  });

});

describe("angular.fromJson", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.fromJson");
  });

});

describe("angular.validator.regexp", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.regexp");
  });

  it('should invalidate non ssn', function(){
   var textBox = element('.doc-example-live :input');
   expect(textBox.attr('className')).not().toMatch(/ng-validation-error/);
   expect(textBox.val()).toEqual('123-45-6789');
   input('ssn').enter('123-45-67890');
   expect(textBox.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.number", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.number");
  });

  it('should invalidate number', function(){
   var n1 = element('.doc-example-live :input[name=n1]');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('n1').enter('1.x');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
   var n2 = element('.doc-example-live :input[name=n2]');
   expect(n2.attr('className')).not().toMatch(/ng-validation-error/);
   input('n2').enter('9');
   expect(n2.attr('className')).toMatch(/ng-validation-error/);
   var n3 = element('.doc-example-live :input[name=n3]');
   expect(n3.attr('className')).not().toMatch(/ng-validation-error/);
   input('n3').enter('201');
   expect(n3.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.integer", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.integer");
  });

  it('should invalidate integer', function(){
   var n1 = element('.doc-example-live :input[name=n1]');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('n1').enter('1.1');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
   var n2 = element('.doc-example-live :input[name=n2]');
   expect(n2.attr('className')).not().toMatch(/ng-validation-error/);
   input('n2').enter('10.1');
   expect(n2.attr('className')).toMatch(/ng-validation-error/);
   var n3 = element('.doc-example-live :input[name=n3]');
   expect(n3.attr('className')).not().toMatch(/ng-validation-error/);
   input('n3').enter('100.1');
   expect(n3.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.date", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.date");
  });

  it('should invalidate date', function(){
   var n1 = element('.doc-example-live :input');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('text').enter('123/123/123');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.email", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.email");
  });

  it('should invalidate email', function(){
   var n1 = element('.doc-example-live :input');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('text').enter('a@b.c');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.phone", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.phone");
  });

  it('should invalidate phone', function(){
   var n1 = element('.doc-example-live :input');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('text').enter('+12345678');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.url", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.url");
  });

  it('should invalidate url', function(){
   var n1 = element('.doc-example-live :input');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('text').enter('abc://server/path');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.json", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.json");
  });

  it('should invalidate json', function(){
   var n1 = element('.doc-example-live :input');
   expect(n1.attr('className')).not().toMatch(/ng-validation-error/);
   input('json').enter('{name}');
   expect(n1.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.validator.asynchronous", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.validator.asynchronous");
  });

  it('should change color in delayed way', function(){
   var textBox = element('.doc-example-live :input');
   expect(textBox.attr('className')).not().toMatch(/ng-input-indicator-wait/);
   expect(textBox.attr('className')).not().toMatch(/ng-validation-error/);
   input('text').enter('X');
   expect(textBox.attr('className')).toMatch(/ng-input-indicator-wait/);
   pause(.6);
   expect(textBox.attr('className')).not().toMatch(/ng-input-indicator-wait/);
   expect(textBox.attr('className')).toMatch(/ng-validation-error/);
  });

});

describe("angular.widget.HTML", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.HTML");
  });

    it('should exercise text', function(){
     input('input1').enter('Carlos');
     expect(binding('input1')).toEqual('"Carlos"');
    });
    it('should exercise textarea', function(){
     input('input2').enter('Carlos');
     expect(binding('input2')).toEqual('"Carlos"');
    });
    it('should exercise radio', function(){
     expect(binding('input3')).toEqual('null');
     input('input3').select('A');
     expect(binding('input3')).toEqual('"A"');
     input('input3').select('B');
     expect(binding('input3')).toEqual('"B"');
    });
    it('should exercise checkbox', function(){
     expect(binding('input4')).toEqual('false');
     input('input4').check();
     expect(binding('input4')).toEqual('true');
    });
    it('should exercise pulldown', function(){
     expect(binding('input5')).toEqual('"c"');
     select('input5').option('d');
     expect(binding('input5')).toEqual('"d"');
    });
    it('should exercise multiselect', function(){
     expect(binding('input6')).toEqual('[]');
     select('input6').options('e');
     expect(binding('input6')).toEqual('["e"]');
     select('input6').options('e', 'f');
     expect(binding('input6')).toEqual('["e","f"]');
    });

});

describe("angular.widget.@ng:validate", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.@ng:validate");
  });

     it('should check ng:validate', function(){
       expect(element('.doc-example-live :input:last').attr('className')).
         toMatch(/ng-validation-error/);
  
       input('value').enter('123');
       expect(element('.doc-example-live :input:last').attr('className')).
         not().toMatch(/ng-validation-error/);
     });

});

describe("angular.widget.@ng:required", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.@ng:required");
  });

   it('should check ng:required', function(){
     expect(element('.doc-example-live :input').attr('className')).toMatch(/ng-validation-error/);
     input('value').enter('123');
     expect(element('.doc-example-live :input').attr('className')).not().toMatch(/ng-validation-error/);
   });

});

describe("angular.widget.@ng:format", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.@ng:format");
  });

   it('should check ng:format', function(){
     expect(binding('list')).toBe('list=["table","chairs","plate"]');
     input('list').enter(',,, a ,,,');
     expect(binding('list')).toBe('list=["a"]');
   });

});

describe("angular.directive.ng:change", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.directive.ng:change");
  });

  it('should check ng:change', function(){
    expect(binding('textCount')).toBe('0');
    expect(binding('checkboxCount')).toBe('0');
  
    using('.doc-example-live').input('text').enter('abc');
    expect(binding('textCount')).toBe('1');
    expect(binding('checkboxCount')).toBe('0');
  
  
    using('.doc-example-live').input('checkbox').check();
    expect(binding('textCount')).toBe('1');
    expect(binding('checkboxCount')).toBe('1');
  });

});

describe("angular.widget.ng:include", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.ng:include");
  });

  it('should load date filter', function(){
   expect(element('.doc-example-live ng\\:include').text()).toMatch(/angular\.filter\.date/);
  });
  it('should change to hmtl filter', function(){
   select('url').option('angular.filter.html.html');
   expect(element('.doc-example-live ng\\:include').text()).toMatch(/angular\.filter\.html/);
  });
  it('should change to blank', function(){
   select('url').option('');
   expect(element('.doc-example-live ng\\:include').text()).toEqual('');
  });

});

describe("angular.widget.ng:switch", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.ng:switch");
  });

  it('should start in settings', function(){
   expect(element('.doc-example-live ng\\:switch').text()).toEqual('Settings Div');
  });
  it('should change to home', function(){
   select('switch').option('home');
   expect(element('.doc-example-live ng\\:switch').text()).toEqual('Home Span');
  });
  it('should select deafault', function(){
   select('switch').option('other');
   expect(element('.doc-example-live ng\\:switch').text()).toEqual('default');
  });

});

describe("angular.widget.@ng:repeat", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.@ng:repeat");
  });

     it('should check ng:repeat', function(){
       var r = using('.doc-example-live').repeater('ul li');
       expect(r.count()).toBe(2);
       expect(r.row(0)).toEqual(["1","John","25"]);
       expect(r.row(1)).toEqual(["2","Mary","28"]);
     });

});

describe("angular.widget.@ng:non-bindable", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.@ng:non-bindable");
  });

  it('should check ng:non-bindable', function(){
    expect(using('.doc-example-live').binding('1 + 2')).toBe('3');
    expect(using('.doc-example-live').element('div:last').text()).
      toMatch(/1 \+ 2/);
  });

});

describe("angular.widget.ng:view", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.widget.ng:view");
  });

  

});

describe("angular.scope", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope");
  });

    it('should inherit the salutation property and override the name property', function() {
      expect(using('.doc-example-live').repeater('li').row(0)).
        toEqual(['0', 'Hello', 'World']);
      expect(using('.doc-example-live').repeater('li').row(1)).
        toEqual(['1', 'Hello', 'Earth']);
      expect(using('.doc-example-live').element('pre').text()).
        toBe('       $index=\n       salutation=Hello\n       name=Misko');
    });

});

describe("angular.scope.$bind", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$bind");
  });

});

describe("angular.scope.$get", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$get");
  });

});

describe("angular.scope.$set", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$set");
  });

});

describe("angular.scope.$eval", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$eval");
  });

});

describe("angular.scope.$tryEval", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$tryEval");
  });

});

describe("angular.scope.$watch", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$watch");
  });

});

describe("angular.scope.$onEval", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$onEval");
  });

});

describe("angular.scope.$become", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$become");
  });

});

describe("angular.scope.$new", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$new");
  });

});

describe("angular.scope.$service", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.scope.$service");
  });

});

describe("angular.service.$cookies", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$cookies");
  });

});

describe("angular.service.$cookieStore", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$cookieStore");
  });

});

describe("angular.service.$defer", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$defer");
  });

});

describe("angular.service.$exceptionHandler", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$exceptionHandler");
  });

});

describe("angular.service.$document", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$document");
  });

});

describe("angular.service.$hover", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$hover");
  });

});

describe("angular.service.$invalidWidgets", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$invalidWidgets");
  });

});

describe("angular.service.$location", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$location");
  });

  

});

describe("angular.service.$log", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$log");
  });

  

});

describe("angular.service.$resource", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$resource");
  });

  

});

describe("angular.service.$route", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$route");
  });

  

});

describe("angular.service.$updateView", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$updateView");
  });

});

describe("angular.service.$window", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$window");
  });

  

});

describe("angular.service.$xhr.bulk", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$xhr.bulk");
  });

});

describe("angular.service.$xhr.cache", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$xhr.cache");
  });

});

describe("angular.service.$xhr.error", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$xhr.error");
  });

});

describe("angular.service.$xhr", function(){
  beforeEach(function(){
    browser().navigateTo("index.html#!angular.service.$xhr");
  });

});
