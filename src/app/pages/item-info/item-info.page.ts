import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router} from '@angular/router';
import { MovieserviceService } from '../../services/movieservice.service';
import { movieInterface } from '../../Modal/movie.interface';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {

  movie : movieInterface={
    title:'',
    director:'',
    actor:'',
    rating:''
  }
  constructor(private actRoute:ActivatedRoute, private movservice:MovieserviceService,private route:Router) {

   }

  ngOnInit() {
  }
  ionViewWillEnter(){
    let id=this.actRoute.snapshot.paramMap.get('id');
    if(id){
      this.movservice.getMovie(id).subscribe(mov=>{
        this.movie=mov;
        this.movservice.getMovie(id).subscribe(console.log);
      })
    }
  }
  updateMovRating(){
    this.movservice.updateRating(this.movie);
  }

  addingMovie(){
    this.movservice.addMovie(this.movie).then(()=>{
      this.route.navigateByUrl('/');
    })
  }
  updateMov(){
    this.movservice.updatemovie(this.movie).then(()=>{
      this.route.navigateByUrl('/');
    });
  }
  removeMovie(){
    this.movservice.deleteMovie(this.movie.id).then(()=>{
      this.route.navigateByUrl('/');
    });
  }
}
