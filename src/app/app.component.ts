import { Component } from '@angular/core';
import * as $ from "jquery";
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'angular-image-uploader';
 // @ViewChild(ImageCropperComponent, {static: false})angularCropper: ImageCropperComponent;

    imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
//    save() {
//      this.angularCropper.crop()
//    }

//    rotateLeft() {
//      this.angularCropper.rotateLeft()
//    }

//    rotateRight() {
//      this.angularCropper.rotateRight()
//    }

//    flipHorizontal() {
//      this.angularCropper.flipHorizontal()
//    }

//    flipVertical() {
//      this.angularCropper.flipVertical()
//    }


  Testing(){
    var name = $("txtName").val();
    alert(name);
  }




    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
}
