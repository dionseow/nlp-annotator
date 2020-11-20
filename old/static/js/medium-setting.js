rangy.init();

var PersonButton = MediumEditor.Extension.extend({
  name: 'person',
  action: 'person',
  useQueryState: true,
  init: function () {
    this.classApplier = rangy.createClassApplier('label', {
        elementTagName: 'person',
//        elementProperties: {
//            className: 'label-primary'
//        },
        normalize: true
    });

    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<i class="fa fa-user"></i>';
    this.button.title = 'Person';

    this.on(this.button, 'click', this.handleClick.bind(this));
  },

  getButton: function () {
    return this.button;
  },

  handleKeypress: function(event) {
    this.classApplier.toggleSelection();
    this.base.checkContentChanged();
  },

  handleClick: function (event) {
    this.classApplier.toggleSelection();

    // Ensure the editor knows about an html change so watchers are notified
    // ie: <textarea> elements depend on the editableInput event to stay synchronized
    this.base.checkContentChanged();
  }
});

var LocationButton = MediumEditor.Extension.extend({
  name: 'location',
  useQueryState: true,

  init: function () {
    this.classApplier = rangy.createClassApplier('label', {
        elementTagName: 'loc',
//        elementProperties: {
//           className: 'label-success'
//        },
        normalize: true
    });

    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<i class="fa fa-map-marker"></i>';
    this.button.title = 'Location';

    this.on(this.button, 'click', this.handleClick.bind(this));
  },

  getButton: function () {
    return this.button;
  },

  handleClick: function (event) {
    this.classApplier.toggleSelection();

    // Ensure the editor knows about an html change so watchers are notified
    // ie: <textarea> elements depend on the editableInput event to stay synchronized
    this.base.checkContentChanged();
  }
});

var OrgButton = MediumEditor.Extension.extend({
  name: 'organization',
  useQueryState: true,

  init: function () {
    this.classApplier = rangy.createClassApplier('label', {
        elementTagName: 'org',
//        elementProperties: {
//            className: 'label-warning'
//        },
        normalize: true
    });

    this.button = this.document.createElement('button');
    this.button.classList.add('medium-editor-action');
    this.button.innerHTML = '<i class="fa fa-building"></i>';
    this.button.title = 'Organization';

    this.on(this.button, 'click', this.handleClick.bind(this));
  },

  getButton: function () {
    return this.button;
  },

  handleClick: function (event) {
    this.classApplier.toggleSelection();

    // Ensure the editor knows about an html change so watchers are notified
    // ie: <textarea> elements depend on the editableInput event to stay synchronized
    this.base.checkContentChanged();
  }
});



var editor = new MediumEditor('.editable', {
  toolbar: {
    buttons: ['person', 'location', 'organization']
  },
  extensions: {
    'person': new PersonButton(),
    'location': new LocationButton(),
    'organization': new OrgButton(),
  },
  disableEditing: false,
  keyboardCommands: {
      commands: [{command: 'person', key:'l', meta:false, shift:true}]
  }
});
