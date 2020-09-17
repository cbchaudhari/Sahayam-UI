import { Component, OnInit } from '@angular/core';
import {Message,ChatService} from './chat.service'

@Component({
  selector: 'sahayam-dailog',
  templateUrl: './sahayam-dailog.component.html',
  styleUrls: ['./sahayam-dailog.component.css']
})
export class SahayamDailogComponent implements OnInit {
  messages: Message[] = [];
  value: string;
  fileToUpload: File = null;

  constructor(public chatService: ChatService) { }

  ngOnInit() {
    this.chatService.conversation.subscribe((val) => {
    this.messages = this.messages.concat(val);
  });
}

sendMessage() {
  this.chatService.getBotAnswer(this.value);
  this.value = '';
}

handleFileInput(files: FileList) {
  
  this.fileToUpload = files.item(0);
  // console.log("hi: ",this.fileToUpload.name);
  var fil = document.getElementById("file-input");
  console.log("hi: ",fil);
}

}
