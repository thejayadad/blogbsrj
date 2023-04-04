import React from 'react'
import Post from './Post'
import {Link} from "react-router-dom"

const Category = () => {
  return (
    <div>
        <ul class="nav justify-content-center">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" href="#">Active</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="#">Link</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="#">Link</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="#">Link</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" href="#">Active</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" href="#">Link</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="#">Link</Link>
  </li>
  <li class="nav-item">
  <Link class="nav-link" href="#">Link</Link>
  </li>

</ul>
<div className='.container-md'>
<div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="..." class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
</div>


</div>
    </div>
  )
}

export default Category