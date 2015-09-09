$(function(){

	var scene, camera, renderer, controls;

	init();
	render();

	function init(){

		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1000);
		renderer = new THREE.WebGLRenderer();

		// camera.position.z = 50;
		camera.position.x = 60;
		camera.position.y = 20;
		camera.position.z = 65;

		renderer.setClearColor(0xffffff);
		renderer.setSize(window.innerWidth,window.innerHeight);
		renderer.shadowMapEnabled = true;
		renderer.shadowMapSoft = true;

		controls = new THREE.TrackballControls(camera);
		controls.addEventListener('change', render);

		


		// var axis = new THREE.AxisHelper(20);
		// scene.add(axis);

		var grid = new THREE.GridHelper(50,5);
		var color = new THREE.Color("rgb(255,0,0)");
		grid.setColors(color,0x000000);

		// scene.add(grid);

		var cubeGeometry = new THREE.BoxGeometry(6,1,6);
		var cubeMaterial = new THREE.MeshLambertMaterial({
			color: 0xff3300
		});
		var cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
		cube.position.x = 0;
		cube.position.y = -14.5;
		cube.position.z = 0;
		cube.castShadow = true;
		scene.add(cube);

		var cubeGeometry2 = new THREE.BoxGeometry(4.5,1,4.5);
		var cube2 = new THREE.Mesh(cubeGeometry2,cubeMaterial);
		cube2.position.x = 0;
		cube2.position.y = -13.5;
		cube2.position.z = 0;
		cube2.castShadow = true;
		scene.add(cube2);


		var cylinderGeometry = new THREE.CylinderGeometry(2,2,16,50,false);
		var cylinderMaterial = new THREE.MeshLambertMaterial({
			color: 0xff3300
			});
		var cylinder = new THREE.Mesh(cylinderGeometry,cylinderMaterial);
		cylinder.position.set(0,-5,0);
		cylinder.castShadow = true;
		scene.add(cylinder);

		var cylinderGeometry2 = new THREE.CylinderGeometry(1,1,24,50,false);
		var cylinder2 = new THREE.Mesh(cylinderGeometry2,cylinderMaterial);
		cylinder2.position.set(0,15,0);
		cylinder2.castShadow = true;
		scene.add(cylinder2);

		var cylinderGeometry3 = new THREE.CylinderGeometry(1.5,1.5,1,50,false);
		var cylinder3 = new THREE.Mesh(cylinderGeometry3,cylinderMaterial);
		cylinder3.position.set(0,27,0);
		cylinder3.castShadow = true;
		scene.add(cylinder3);

		var cylinderGeometry4 = new THREE.CylinderGeometry(2,2,0.5,50,false);
		var cylinder4 = new THREE.Mesh(cylinderGeometry4,cylinderMaterial);
		cylinder4.position.set(0,27.5,0);
		cylinder4.castShadow = true;
		scene.add(cylinder4);

		var cubeGeometry3 = new THREE.BoxGeometry(4.25,0.5,4.25);
		var cube3 = new THREE.Mesh(cubeGeometry3,cubeMaterial);
		cube3.position.set(0,28,0);
		scene.add(cube3);

		var cylinderGeometry5 = new THREE.CylinderGeometry(3.5,2.5,4,4,false);
		var cylinderMaterial1 = new THREE.MeshLambertMaterial({
				color: 0xFFD967,
	        	// envMap: reflectionCube,
	        	opacity: 0.8,
	        	transparent: true
			});
		var cylinder5 = new THREE.Mesh(cylinderGeometry5,cylinderMaterial1);
		cylinder5.position.set(0,30,0);
		cylinder5.rotation.y = -0.25*Math.PI;
		cylinder5.castShadow = true;
		scene.add(cylinder5);

		var cylinderGeometry6 = new THREE.CylinderGeometry(1.5,5,2,4,false);
		var cylinder6 = new THREE.Mesh(cylinderGeometry6,cylinderMaterial);
		cylinder6.position.set(0,33,0);
		cylinder6.rotation.y = -0.25*Math.PI;
		cylinder6.castShadow = true;
		scene.add(cylinder6);

		var cubeGeometry4 = new THREE.BoxGeometry(2.5,1,2.5);
		var cube4 = new THREE.Mesh(cubeGeometry4,cubeMaterial);
		cube4.position.set(0,34,0);
		scene.add(cube4);

		var cylinderGeometry7 = new THREE.CylinderGeometry(0,1,3,4,false);
		var cylinder7 = new THREE.Mesh(cylinderGeometry7,cylinderMaterial);
		cylinder7.position.set(0,35,0);
		cylinder7.rotation.y = -0.25*Math.PI;
		cylinder7.castShadow = true;
		scene.add(cylinder7);

		var planeGeometry = new THREE.PlaneGeometry(100,150,80);
		var planeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
		var plane = new THREE.Mesh(planeGeometry,planeMaterial);

		plane.rotation.x = -.5*Math.PI;
		plane.position.z = -30;
		plane.position.y = -15;
		plane.receiveShadow =true;

		scene.add(plane);



		

		var spotLight = new THREE.SpotLight(0xffffff);
		spotLight.castShadow = true;
		spotLight.position.set(10,70,80);

		scene.add(spotLight);



		

		camera.lookAt(scene.position);

		window.addEventListener( 'resize', onWindowResize, false );


		$("#webgl_container").append(renderer.domElement);

		animate();
	}

	function animate(){
		requestAnimationFrame(animate);
        controls.update();
	}

	function render(){
		renderer.render(scene,camera);
		// stats.update();
	}

	function onWindowResize() {

        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.setSize( window.innerWidth, window.innerHeight );

        render();

	}
});