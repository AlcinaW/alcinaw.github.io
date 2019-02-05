<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js">

</script>
<script type="text/javascript">
  TweenMax.fromTo(".tunnel-ring-one", .4,
  {visible:true, scale: 3 },
  {scale: .05, repeat: -1});

  TweenMax.fromTo(".tunnel-ring-two", 1,
  {visible:true, scale: 4 },
  {scale: .05, repeat: -1});

  TweenMax.fromTo(".tunnel-ring-three", 3,
  {visible:true, scale: 8 },
  {scale: .05, repeat: -1});

</script>