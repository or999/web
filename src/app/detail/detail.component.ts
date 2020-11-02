import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from '../hero';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('id');
      console.log(params.has('id'));
      console.log(params.getAll('id'));
      console.log(params.keys);
    });

  }
  gotoHeros(id: number): void {
    console.log(id);
    this.router.navigate(['/heroes', { id, foo: 'foo' }]);
    // 返回
  }
}
