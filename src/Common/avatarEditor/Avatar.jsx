import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faUser } from '@fortawesome/free-solid-svg-icons';

class Avatar extends Component {
  constructor() {
    super();

    this.state = {
      width: 100,
      height: 100,
      rotate: 0,
      scale: 1,
      image: null
    };

    this.editorRef = React.createRef();
    this.onDrop = this.onDrop.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onDrop(acceptedFiles) {
    if (acceptedFiles.length > 0) {
      this.setState({ image: acceptedFiles[0] });
    }
  }

  handleEdit() {
    this.setState({ image: null });
  }

  handleDelete() {
    this.setState({ image: null });
  }

  render() {
    const { image } = this.state;

    return (
      <Dropzone
        multiple={false}
        onDropAccepted={this.onDrop}
        accept="image/*"
      >
        {({ getRootProps, getInputProps }) => (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div {...getRootProps()} style={{ width: '100px', height: '100px', borderRadius: '50%', border: '2px dashed #ccc', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              <input {...getInputProps()} />
              {image && (
                <img src={URL.createObjectURL(image)} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              )}
              {!image && (
                <FontAwesomeIcon className="text-[50px]" icon={faUser}/>
              )}
              {image && (
                <div style={{ position: 'absolute', bottom: '10px', left: '100px', display: 'flex' }}>
                  <button onClick={this.handleEdit} style={{ marginRight: '10px' }}>
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button onClick={this.handleDelete}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </Dropzone>
    );
  }
}

export default Avatar;
