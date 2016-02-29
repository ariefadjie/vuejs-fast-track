new Vue({
	el: '#liren',
	data: {
		formOpened	: false,
		links		: [
		{
			url		: 'http://malescast.com',
			title 	: 'Screen Cast Malescast',
			desc	: 'Jika anda males bisa belajar disini',
			vote	: 10

		},
		{
			url		: 'http://leanpub.com',
			title	: 'Free & Paid Ebook',
			desc	: 'Nyari yang gratisan atau berbayar disini tempatnya',
			vote	: 23
		},
		{
			url		: 'http://naistudio.com',
			title	: 'Indonesian Web Design Taste',
			desc	: 'Best web design & web development patner',
			vote	: 6
		}]

	},
	methods: {
		showForm : function(){
			this.formOpened = true;
		},
		hideForm : function(){
			this.formOpened = false;
			this.resetNewLink();
		},
		resetNewLink	: function(){
			this.newLink = {
				title	: '',
				url		: '',
				desc	: '',
				vote	: 0

			}
		},
		addLink			: function(){
			this.links.push({
				url		: this.newLink.url,
				title	: this.newLink.title,
				desc 	: this.newLink.desc,
				vote	: 0
			});
			this.resetNewLink();
			this.hideForm();
		},
		removeLink		: function(link){
			this.links.$remove(link);
		},
		upVote : function(link){
			link.vote++;
		},
		downVote : function(link){
			link.vote--;
		}


	}
});
