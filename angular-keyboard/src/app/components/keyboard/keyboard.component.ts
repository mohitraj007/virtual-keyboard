import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { numbers, alphabets, symbols } from '../../../assets/keys.json';
@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  numbers = numbers;
  alphabets = alphabets;
  symbols = symbols;
  upperCase = false;
  shift = false;
  capsLock = false;
  input = '';

  constructor() { }

  ngOnInit(): void {
  }

  shuffle() {
    alphabets.sort(() => Math.random() - 0.5);
  }

  keyClick(value: any) {
    if (typeof value === "string") {
      this.input = this.input.concat(this.upperCase ? value.toUpperCase() : value);
    } else {
      this.input = this.input.concat(this.upperCase ? value['secondary'] : value['primary']);
    }
    if (this.shift) {
      this.toggleShift();
    }
    this.shuffle();
  }

  toggleShift() {
    this.shift = !this.shift;
    this.toggleUpperCase();
  }

  toggleCapsLock() {
    this.capsLock = !this.capsLock;
    this.toggleUpperCase();
  }

  toggleUpperCase() {
    this.upperCase = this.shift === this.capsLock ? false : true;
  }

  enter() {
    this.input = this.input.concat('\n');
  }

  space() {
    this.input = this.input.concat(' ');
  }

  tab() {
    this.input = this.input.concat('\t');
  }

  backSpace() {
    this.input = this.input.slice(0, -1);
  }
}
