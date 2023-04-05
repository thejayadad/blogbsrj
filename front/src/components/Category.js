import React from 'react'
import Post from './Post'
import {Link} from "react-router-dom"

const Category = () => {
  return (
    <div className='mt-4'>
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
<div className='.container-md align-items-center'>
<div class="row row-cols-1 row-cols-md-2 g-4 mt-4">
<Post />
<Post />
<Post />
<Post />
<Post />
<Post />
<Post />
<Post />
<Post />


</div>


</div>
    </div>
  )
}

export default Category