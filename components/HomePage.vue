<template>
  <div class="hero">
    <div class="container">
      <h1>
        Discover the power of Zion Builder with our comprehensive guide. From beginner to expert, we've got you covered.
      </h1>
    </div>

    <div class="container">
      <a href="/introduction" class="box">
        <h2>Builder documentation</h2>
        <p>
          Learn how to install Zion Builder and how to create your first page. We'll also show you how to use the
          builder's interface and how to add content to your pages.
        </p>
      </a>

      <a href="#" class="box">
        <h2>Pre sales questions</h2>
        <p>
          Learn how to use the builder's API. We'll show you how to use the builder's API and how to create your own
          custom elements.
        </p>
      </a>

      <a href="/developer" class="box">
        <h2>Developer documentation</h2>
        <p>
          Learn how to use the builder's advanced features. We'll show you how to use the builder's advanced features
          and how to create your own custom elements.
        </p>
      </a>
    </div>

    <div class="container"><div class="icon-scroll"></div></div>
  </div>

  <div class="pillsContainer">
    <div class="container">
      <div class="col">
        <h2>Popular articles</h2>
        <div class="pills">
          <a href="/install" class="pill">Installing Zion Builder</a>
          <a href="/system-requirements" class="pill">System requirements</a>
          <a href="/free-vs-pro" class="pill">Difference between free and pro</a>
          <a href="/install" class="pill">Installing Zion Builder</a>
          <a href="/install" class="pill">Installing Zion Builder</a>
          <a href="/install" class="pill">Installing Zion Builder</a>
        </div>
      </div>

      <div class="col">
        <h2>Popular articles</h2>
        <div class="pills">
          <a href="/install" class="pill">Installing Zion Builder</a>
          <a href="/system-requirements" class="pill">System requirements</a>
          <a href="/free-vs-pro" class="pill">Difference between free and pro</a>
          <a href="/install" class="pill">Installing Zion Builder</a>
          <a href="/install" class="pill">Installing Zion Builder</a>
          <a href="/install" class="pill">Installing Zion Builder</a>
        </div>
      </div>
    </div>
  </div>

  <div class="bottomLinks">
    <div class="container">
      <div class="col">
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
          <li><a href="#">Link 6</a></li>
        </ul>
      </div>
      <div class="col">
        <ul>
          <li><a href="#">Link 7</a></li>
          <li><a href="#">Link 8</a></li>
          <li><a href="#">Link 9</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  padding: 100px 0;
  background-color: var(--vp-c-brand);
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hero .container {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: calc(var(--vp-layout-max-width) - 64px);
  flex-direction: column;
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
  //   max-width: calc(var(--vp-layout-max-width) / 2);
  text-align: center;
  margin-bottom: 100px;
}

.hero .button {
  margin: 0 auto;
  display: block;
}

.hero .box {
  background-color: #fff;
  color: #000;
  padding: 40px;
  margin: 0 0 40px;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s ease-in-out;
}

.box:hover {
  transform: translateY(-20px);
}

h2 {
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0 0 20px;
}

.hero .box p {
  font-size: 1.125rem;
  line-height: 1.5;
  margin: 0;
}

.hero .container {
  flex-direction: row;
}

.hero .box {
  margin: 0 0 0 40px;
  width: calc(33.333% - 40px);
}

.bottomLinks {
  background-color: #333;
  color: #fff;
  padding: 30px 0;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1140px;
  margin: 0 auto;
}

.col {
  width: 33.33%;
}

.bottomLinks ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bottomLinks li {
  margin-bottom: 10px;
}

.bottomLinks a {
  color: #fff;
  text-decoration: none;
}

.pillsContainer {
  background-color: #f5f5f5;
  padding: 50px 0;
}

.pillsContainer .container {
  gap: 30px;
}

.pillsContainer .col {
  width: 50%;
}

.pill {
  padding: 15px 25px;
  display: block;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 2px 4px rgb(0 0 0 / 10%);
  margin-bottom: 15px;
  transition: box-shadow 0.2s ease-in-out;
}

.pill:hover {
  box-shadow: 0 0 0 1px rgb(0 0 0 / 20%), 0 2px 4px rgb(0 0 0 / 200%);
}

// Scroll icon
body {
  background: #3498db;
}
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 40px;
  height: 70px;
  margin-left: -20px;
  top: 50%;
  margin-top: -35px;
  box-shadow: inset 0 0 0 1px #fff;
  border-radius: 25px;
}
.icon-scroll:before {
  content: '';
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  -webkit-animation-duration: 1.5s;
  animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-name: scroll;
  animation-name: scroll;
}
@-webkit-keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(46px);
  }
}
</style>
