import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather APP';
  Location = "";
  Time = "";
  Temperature = "";
  Humidity = "";
  Sunrise = "";
  Sunset = "";
  display = 1;
  
  search = () =>{
    this.display = 2;
    if (this.Location == 'Gangtok'){
      this.Location = "Gangtok";
      this.Time = "10:00 am";
      this.Temperature = "16";
      this.Humidity = "78%";
      this.Sunrise = "06:45 am";
      this.Sunset = "04:58 pm"
    }
    else if (this.Location == 'Tokyo'){
      this.Location = "Tokyo";
      this.Time = "01:30 pm";
      this.Temperature = "28";
      this.Humidity = "92%";
      this.Sunrise = "05:00 am";
      this.Sunset = "05:35 pm"
    }
    else if (this.Location == 'London'){
      this.Location = "London";
      this.Time = "04:30 am";
      this.Temperature = "07";
      this.Humidity = "72%";
      this.Sunrise = "06:12 am";
      this.Sunset = "05:12 pm"
    }
    else if (this.Location == 'New York'){
      this.Location = "New York";
      this.Time = "08:30 pm";
      this.Temperature = "03";
      this.Humidity = "82%";
      this.Sunrise = "05:58 am";
      this.Sunset = "06:32 pm"
    }
  }
}