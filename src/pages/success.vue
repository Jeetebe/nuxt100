<template>
  <div class="jumbotron text-center">
    <!-- <h2 class="display-3">Thành công</h2> -->
    <p class="font-semibold text-2xl">
      <strong
        >Cảm ơn quý khách đã mua hàng - Sim của quý khách sẽ được giao miễn phí
        tận nơi</strong
      >
    </p>
    <hr />

    <p class="lead">
      <a class="btn btn-primary btn" href="/" role="button">Trở về</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style>
/*! CSS Used from: https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css */
*,
::after,
::before {
  box-sizing: border-box;
}
hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
h1 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
strong {
  font-weight: bolder;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}
h1 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
h1 {
  font-size: 1.5rem;
}
.lead {
  font-size: 1.25rem;
  font-weight: 300;
}
.display-3 {
  font-size: 4.5rem;
  font-weight: 300;
  line-height: 1.2;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media screen and (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:focus,
.btn:hover {
  text-decoration: none;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn:disabled {
  opacity: 0.65;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}
.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
}
.jumbotron {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
  background-color: #e9ecef;
  border-radius: 0.3rem;
}
@media (min-width: 576px) {
  .jumbotron {
    padding: 4rem 2rem;
  }
}
.text-center {
  text-align: center !important;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  p {
    orphans: 3;
    widows: 3;
  }
}
</style>
