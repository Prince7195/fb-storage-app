import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  // Main Task
  task: AngularFireUploadTask;

  // Progress Monitoring
  percentage: Observable<number>;

  snapshot: Observable<any>;

  // Download Url
  downloadUrl: Observable<string>;

  // State for dropzone CSS toggling
  isHovering: boolean;

  constructor(
    private storage: AngularFireStorage
  ) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {

    // The file object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :(');
      return;
    }

    // The Storage path
    const path = `test/${new Date().getTime()}_${file.name}`;

    // Totally optiona metadata
    const customMetadata = { app: 'My AngularFire-Powered PWA!' };

    // The main Task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress Monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges();

    // The file's DownloadUrl
    this.downloadUrl = this.task.downloadURL();

  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }

  ngOnInit() {
  }

}
