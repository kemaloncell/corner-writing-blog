<template>
  <div class="container-fluid mt-5 d-flex flex-wrap justify-content-center align-items-center">
    <form style="width: 500px">
      <fieldset>
        <legend>New Corner Post</legend>
        <div class="form-group">
          <label>Author Name</label>
          <input type="text" class="form-control" placeholder="Name.." />
        </div>
        <div class="form-group">
          <label>Title</label>
          <input type="text" class="form-control" placeholder="Title.." />
        </div>
        <div class="form-group">
          <label>Sub Title</label>
          <input type="text" class="form-control" placeholder="Sub Title.." />
        </div>
        <div class="form-group">
          <label for="exampleTextarea">Corner Post</label>
          <textarea class="form-control" rows="5"></textarea>
        </div>
        <button class="btn btn-danger">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </fieldset>
    </form>
  </div>
</template>
