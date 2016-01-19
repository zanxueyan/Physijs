(function () { 'use strict';

	var _goblin = {

	};

	!function(){var t={};t.Matrix3=function(t,i,e,o,s,a,n,r,c){this.e00=t||0,this.e01=i||0,this.e02=e||0,this.e10=o||0,this.e11=s||0,this.e12=a||0,this.e20=n||0,this.e21=r||0,this.e22=c||0},t.Matrix3.prototype={identity:function(){this.e00=1,this.e01=0,this.e02=0,this.e10=0,this.e11=1,this.e12=0,this.e20=0,this.e21=0,this.e22=1},fromMatrix4:function(t){this.e00=t.e00,this.e01=t.e01,this.e02=t.e02,this.e10=t.e10,this.e11=t.e11,this.e12=t.e12,this.e20=t.e20,this.e21=t.e21,this.e22=t.e22},fromQuaternion:function(t){var i=t.x+t.x,e=t.y+t.y,o=t.z+t.z,s=t.x*i,a=t.x*e,n=t.x*o,r=t.y*e,c=t.y*o,h=t.z*o,l=t.w*i,p=t.w*e,b=t.w*o;this.e00=1-(r+h),this.e10=a+b,this.e20=n-p,this.e01=a-b,this.e11=1-(s+h),this.e21=c+l,this.e02=n+p,this.e12=c-l,this.e22=1-(s+r)},transformVector3:function(t){var i=t.x,e=t.y,o=t.z;t.x=this.e00*i+this.e01*e+this.e02*o,t.y=this.e10*i+this.e11*e+this.e12*o,t.z=this.e20*i+this.e21*e+this.e22*o},transformVector3Into:function(t,i){i.x=this.e00*t.x+this.e01*t.y+this.e02*t.z,i.y=this.e10*t.x+this.e11*t.y+this.e12*t.z,i.z=this.e20*t.x+this.e21*t.y+this.e22*t.z},transposeInto:function(t){t.e00=this.e00,t.e10=this.e01,t.e20=this.e02,t.e01=this.e10,t.e11=this.e11,t.e21=this.e12,t.e02=this.e20,t.e12=this.e21,t.e22=this.e22},invert:function(){var t,i=this.e00,e=this.e01,o=this.e02,s=this.e10,a=this.e11,n=this.e12,r=this.e20,c=this.e21,h=this.e22,l=h*a-n*c,p=-h*s+n*r,b=c*s-a*r,_=i*l+e*p+o*b;return _?(t=1/_,this.e00=l*t,this.e01=(-h*e+o*c)*t,this.e02=(n*e-o*a)*t,this.e10=p*t,this.e11=(h*i-o*r)*t,this.e12=(-n*i+o*s)*t,this.e20=b*t,this.e21=(-c*i+e*r)*t,this.e22=(a*i-e*s)*t,!0):!0},invertInto:function(t){var i,e=this.e00,o=this.e01,s=this.e02,a=this.e10,n=this.e11,r=this.e12,c=this.e20,h=this.e21,l=this.e22,p=l*n-r*h,b=-l*a+r*c,_=h*a-n*c,u=e*p+o*b+s*_;return u?(i=1/u,t.e00=p*i,t.e01=(-l*o+s*h)*i,t.e02=(r*o-s*n)*i,t.e10=b*i,t.e11=(l*e-s*c)*i,t.e12=(-r*e+s*a)*i,t.e20=_*i,t.e21=(-h*e+o*c)*i,t.e22=(n*e-o*a)*i,!0):!1},multiply:function(t){var i=this.e00,e=this.e01,o=this.e02,s=this.e10,a=this.e11,n=this.e12,r=this.e20,c=this.e21,h=this.e22,l=t.e00,p=t.e01,b=t.e02,_=t.e10,u=t.e11,f=t.e12,d=t.e20,m=t.e21,y=t.e22;this.e00=l*i+_*e+d*o,this.e10=l*s+_*a+d*n,this.e20=l*r+_*c+d*h,this.e01=p*i+u*e+m*o,this.e11=p*s+u*a+m*n,this.e21=p*r+u*c+m*h,this.e02=b*i+f*e+y*o,this.e12=b*s+f*a+y*n,this.e22=b*r+f*c+y*h},multiplyFrom:function(t,i){var e=t.e00,o=t.e01,s=t.e02,a=t.e10,n=t.e11,r=t.e12,c=t.e20,h=t.e21,l=t.e22,p=i.e00,b=i.e01,_=i.e02,u=i.e10,f=i.e11,d=i.e12,m=i.e20,y=i.e21,j=i.e22;this.e00=p*e+u*o+m*s,this.e10=p*a+u*n+m*r,this.e20=p*c+u*h+m*l,this.e01=b*e+f*o+y*s,this.e11=b*a+f*n+y*r,this.e21=b*c+f*h+y*l,this.e02=_*e+d*o+j*s,this.e12=_*a+d*n+j*r,this.e22=_*c+d*h+j*l}},t.Matrix4=function(){this.e00=0,this.e01=0,this.e02=0,this.e03=0,this.e10=0,this.e11=0,this.e12=0,this.e13=0,this.e20=0,this.e21=0,this.e22=0,this.e23=0,this.e30=0,this.e31=0,this.e32=0,this.e33=0},t.Matrix4.prototype={identity:function(){this.e00=1,this.e01=0,this.e02=0,this.e03=0,this.e10=0,this.e11=1,this.e12=0,this.e13=0,this.e20=0,this.e21=0,this.e22=1,this.e23=0,this.e30=0,this.e31=0,this.e32=0,this.e33=1},copy:function(t){this.e00=t.e00,this.e01=t.e01,this.e02=t.e02,this.e03=t.e03,this.e10=t.e10,this.e11=t.e11,this.e12=t.e12,this.e13=t.e13,this.e20=t.e20,this.e21=t.e21,this.e22=t.e22,this.e23=t.e23,this.e30=t.e30,this.e31=t.e31,this.e32=t.e32,this.e33=t.e33},makeTransform:function(t,i){var e=t.x+t.x,o=t.y+t.y,s=t.z+t.z,a=t.x*e,n=t.x*o,r=t.x*s,c=t.y*o,h=t.y*s,l=t.z*s,p=t.w*e,b=t.w*o,_=t.w*s;this.e00=1-(c+l),this.e10=n+_,this.e20=r-b,this.e30=0,this.e01=n-_,this.e11=1-(a+l),this.e21=h+p,this.e31=0,this.e02=r+b,this.e12=h-p,this.e22=1-(a+c),this.e32=0,this.e03=i.x,this.e13=i.y,this.e23=i.z,this.e33=1},transformVector3:function(t){var i=t.x,e=t.y,o=t.z;t.x=this.e00*i+this.e01*e+this.e02*o+this.e03,t.y=this.e10*i+this.e11*e+this.e12*o+this.e13,t.z=this.e20*i+this.e21*e+this.e22*o+this.e23},transformVector3Into:function(t,i){i.x=this.e00*t.x+this.e01*t.y+this.e02*t.z+this.e03,i.y=this.e10*t.x+this.e11*t.y+this.e12*t.z+this.e13,i.z=this.e20*t.x+this.e21*t.y+this.e22*t.z+this.e23},rotateVector3:function(t){var i=t.x,e=t.y,o=t.z;t.x=this.e00*i+this.e01*e+this.e02*o,t.y=this.e10*i+this.e11*e+this.e12*o,t.z=this.e20*i+this.e21*e+this.e22*o},rotateVector3Into:function(t,i){i.x=this.e00*t.x+this.e01*t.y+this.e02*t.z,i.y=this.e10*t.x+this.e11*t.y+this.e12*t.z,i.z=this.e20*t.x+this.e21*t.y+this.e22*t.z},invert:function(){var t,i=this.e00,e=this.e01,o=this.e02,s=this.e03,a=this.e10,n=this.e11,r=this.e12,c=this.e13,h=this.e20,l=this.e21,p=this.e22,b=this.e23,_=this.e30,u=this.e31,f=this.e32,d=this.e33,m=i*n-e*a,y=i*r-o*a,j=i*c-s*a,x=e*r-o*n,w=e*c-s*n,v=o*c-s*r,g=h*u-l*_,V=h*f-p*_,z=h*d-b*_,B=l*f-p*u,S=l*d-b*u,C=p*d-b*f,P=m*C-y*S+j*B+x*z-w*V+v*g;return P?(t=1/P,this.e00=(n*C-r*S+c*B)*t,this.e01=(-e*C+o*S-s*B)*t,this.e02=(u*v-f*w+d*x)*t,this.e03=(-l*v+p*w-b*x)*t,this.e10=(-a*C+r*z-c*V)*t,this.e11=(i*C-o*z+s*V)*t,this.e12=(-_*v+f*j-d*y)*t,this.e13=(h*v-p*j+b*y)*t,this.e20=(a*S-n*z+c*g)*t,this.e21=(-i*S+e*z-s*g)*t,this.e22=(_*w-u*j+d*m)*t,this.e23=(-h*w+l*j-b*m)*t,this.e30=(-a*B+n*V-r*g)*t,this.e31=(i*B-e*V+o*g)*t,this.e32=(-_*x+u*y-f*m)*t,this.e33=(h*x-l*y+p*m)*t,!0):!1},invertInto:function(t){var i,e=this.e00,o=this.e10,s=this.e20,a=this.e30,n=this.e01,r=this.e11,c=this.e21,h=this.e31,l=this.e02,p=this.e12,b=this.e22,_=this.e32,u=this.e03,f=this.e13,d=this.e23,m=this.e33,y=e*r-o*n,j=e*c-s*n,x=e*h-a*n,w=o*c-s*r,v=o*h-a*r,g=s*h-a*c,V=l*f-p*u,z=l*d-b*u,B=l*m-_*u,S=p*d-b*f,C=p*m-_*f,P=b*m-_*d,M=y*P-j*C+x*S+w*B-v*z+g*V;return M?(i=1/M,t.e00=(r*P-c*C+h*S)*i,t.e10=(-o*P+s*C-a*S)*i,t.e20=(f*g-d*v+m*w)*i,t.e30=(-p*g+b*v-_*w)*i,t.e01=(-n*P+c*B-h*z)*i,t.e11=(e*P-s*B+a*z)*i,t.e21=(-u*g+d*x-m*j)*i,t.e31=(l*g-b*x+_*j)*i,t.e02=(n*C-r*B+h*V)*i,t.e12=(-e*C+o*B-a*V)*i,t.e22=(u*v-f*x+m*y)*i,t.e32=(-l*v+p*x-_*y)*i,t.e03=(-n*S+r*z-c*V)*i,t.e13=(e*S-o*z+s*V)*i,t.e23=(-u*w+f*j-d*y)*i,void(t.e33=(l*w-p*j+b*y)*i)):!1},multiply:function(t){var i=this.e00,e=this.e10,o=this.e20,s=this.e30,a=this.e01,n=this.e11,r=this.e21,c=this.e31,h=this.e02,l=this.e12,p=this.e22,b=this.e32,_=this.e03,u=this.e13,f=this.e23,d=this.e33,m=t.e00,y=t.e10,j=t.e20,x=t.e30;this.e00=m*i+y*a+j*h+x*_,this.e10=m*e+y*n+j*l+x*u,this.e20=m*o+y*r+j*p+x*f,this.e30=m*s+y*c+j*b+x*d,m=t.e01,y=t.e11,j=t.e21,x=t.e31,this.e01=m*i+y*a+j*h+x*_,this.e11=m*e+y*n+j*l+x*u,this.e21=m*o+y*r+j*p+x*f,this.e31=m*s+y*c+j*b+x*d,m=t.e02,y=t.e12,j=t.e22,x=t.e32,this.e02=m*i+y*a+j*h+x*_,this.e12=m*e+y*n+j*l+x*u,this.e22=m*o+y*r+j*p+x*f,this.e32=m*s+y*c+j*b+x*d,m=t.e03,y=t.e13,j=t.e23,x=t.e33,this.e03=m*i+y*a+j*h+x*_,this.e13=m*e+y*n+j*l+x*u,this.e23=m*o+y*r+j*p+x*f,this.e33=m*s+y*c+j*b+x*d}},t.Quaternion=function(t,i,e,o){this.x=null!=t?t:0,this.y=null!=i?i:0,this.z=null!=e?e:0,this.w=null!=o?o:1,this.normalize()},t.Quaternion.prototype={set:function(t,i,e,o){this.x=t,this.y=i,this.z=e,this.w=o},multiply:function(t){var i=this.x,e=this.y,o=this.z,s=this.w,a=t.x,n=t.y,r=t.z,c=t.w;this.x=i*c+s*a+e*r-o*n,this.y=e*c+s*n+o*a-i*r,this.z=o*c+s*r+i*n-e*a,this.w=s*c-i*a-e*n-o*r},multiplyQuaternions:function(t,i){this.x=t.x*i.w+t.w*i.x+t.y*i.z-t.z*i.y,this.y=t.y*i.w+t.w*i.y+t.z*i.x-t.x*i.z,this.z=t.z*i.w+t.w*i.z+t.x*i.y-t.y*i.x,this.w=t.w*i.w-t.x*i.x-t.y*i.y-t.z*i.z},normalize:function(){var t=this.x,i=this.y,e=this.z,o=this.w,s=Math.sqrt(t*t+i*i+e*e+o*o);0===s?this.x=this.y=this.z=this.w=0:(s=1/s,this.x*=s,this.y*=s,this.z*=s,this.w*=s)},invertQuaternion:function(t){var i=t.x,e=t.y,o=t.z,s=t.w,a=i*i+e*e+o*o+s*s;if(0===a)this.x=this.y=this.z=this.w=0;else{var n=-1/a;this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=t.w*-n}},transformVector3:function(t){var i=t.x,e=t.y,o=t.z,s=this.x,a=this.y,n=this.z,r=this.w,c=r*i+a*o-n*e,h=r*e+n*i-s*o,l=r*o+s*e-a*i,p=-s*i-a*e-n*o;t.x=c*r+p*-s+h*-n-l*-a,t.y=h*r+p*-a+l*-s-c*-n,t.z=l*r+p*-n+c*-a-h*-s},transformVector3Into:function(t,i){var e=t.x,o=t.y,s=t.z,a=this.x,n=this.y,r=this.z,c=this.w,h=c*e+n*s-r*o,l=c*o+r*e-a*s,p=c*s+a*o-n*e,b=-a*e-n*o-r*s;i.x=h*c+b*-a+l*-r-p*-n,i.y=l*c+b*-n+p*-a-h*-r,i.z=p*c+b*-r+h*-n-l*-a}},t.Vector3=function(t,i,e){this.x=t||0,this.y=i||0,this.z=e||0},t.Vector3.prototype={set:function(t,i,e){this.x=t,this.y=i,this.z=e},copy:function(t){this.x=t.x,this.y=t.y,this.z=t.z},add:function(t){this.x+=t.x,this.y+=t.y,this.z+=t.z},addVectors:function(t,i){this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z},subtract:function(t){this.x-=t.x,this.y-=t.y,this.z-=t.z},subtractVectors:function(t,i){this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z},multiply:function(t){this.x*=t.x,this.y*=t.y,this.z*=t.z},multiplyVectors:function(t,i){this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z},scale:function(t){this.x*=t,this.y*=t,this.z*=t},scaleVector:function(t,i){this.x=t.x*i,this.y=t.y*i,this.z=t.z*i},lengthSquared:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSquared())},normalize:function(){var t=this.length();0===t?this.x=this.y=this.z=0:this.scale(1/t)},normalizeVector:function(t){this.copy(t),this.normalize()},dot:function(t){return this.x*t.x+this.y*t.y+this.z*t.z},cross:function(t){var i=this.x,e=this.y,o=this.z;this.x=e*t.z-o*t.y,this.y=o*t.x-i*t.z,this.z=i*t.y-e*t.x},crossVectors:function(t,i){this.x=t.y*i.z-t.z*i.y,this.y=t.z*i.x-t.x*i.z,this.z=t.x*i.y-t.y*i.x},distanceTo:function(t){var i=t.x-this.x,e=t.y-this.y,o=t.z-this.z;return Math.sqrt(i*i+e*e+o*o)},findOrthogonal:function(t,i){var e,o;Math.abs(this.z)>.7071067811865476?(e=-this.y*this.y+this.z*this.z,o=1/Math.sqrt(e),t.set(0,-this.z*o,this.y*o),i.set(e*o,-this.x*t.z,this.x*t.y)):(e=this.x*this.x+this.y*this.y,o=1/Math.sqrt(e),t.set(-this.y*o,this.x*o,0),i.set(-this.z*t.y,this.z*t.x,e*o))}},t.EPSILON=1e-5;var i=new t.Vector3,e=new t.Vector3,o=new t.Vector3,s=new t.Quaternion,a=new t.Quaternion,n=new t.Matrix3,r=new t.Matrix3;t.EventEmitter=function(){},t.EventEmitter.prototype={addListener:function(t,i){null==this.listeners[t]&&(this.listeners[t]=[]),-1===this.listeners[t].indexOf(i)&&this.listeners[t].push(i)},removeListener:function(t,i){null==this.listeners[t]&&(this.listeners[t]=[]);var e=this.listeners[t].indexOf(i);-1!==e&&this.listeners[t].splice(e,1)},removeAllListeners:function(){for(var t=Object.keys(this.listeners),i=0;i<t.length;i++)this.listeners[t[i]].length=0},emit:function(t){var i,e=Array.prototype.slice.call(arguments,1);if(this.listeners[t]instanceof Array)for(var o=this.listeners[t].slice(),s=0;s<o.length;s++)if(i=o[s].apply(this,e),i===!1)return!1}},t.EventEmitter.apply=function(i){i.prototype.addListener=t.EventEmitter.prototype.addListener,i.prototype.removeListener=t.EventEmitter.prototype.removeListener,i.prototype.removeAllListeners=t.EventEmitter.prototype.removeAllListeners,i.prototype.emit=t.EventEmitter.prototype.emit},t.RigidBody=function(){var i=0;return function(e,o){this.id=i++,this.shape=e,this.aabb=new t.AABB,this._mass=o||1/0,this._mass_inverted=1/o,this.position=new t.Vector3,this.rotation=new t.Quaternion(0,0,0,1),this.linear_velocity=new t.Vector3,this.angular_velocity=new t.Vector3,this.transform=new t.Matrix4,this.transform.identity(),this.transform_inverse=new t.Matrix4,this.transform_inverse.identity(),this.inertiaTensor=e.getInertiaTensor(o),this.inverseInertiaTensor=new t.Matrix3,this.inertiaTensor.invertInto(this.inverseInertiaTensor),this.inertiaTensorWorldFrame=new t.Matrix3,this.inverseInertiaTensorWorldFrame=new t.Matrix3,this.acceleration=new t.Vector3,this.restitution=.1,this.friction=.5,this.collision_groups=0,this.collision_mask=0,this.gravity=null,this.linear_damping=0,this.angular_damping=0,this.linear_factor=new t.Vector3(1,1,1),this.angular_factor=new t.Vector3(1,1,1),this.world=null,this.accumulated_force=new t.Vector3,this.accumulated_torque=new t.Vector3,this.push_velocity=new t.Vector3,this.turn_velocity=new t.Vector3,this.solver_impulse=new Float64Array(6),this.updateDerived(),this.listeners={}}}(),t.EventEmitter.apply(t.RigidBody),Object.defineProperty(t.RigidBody.prototype,"mass",{get:function(){return this._mass},set:function(t){this._mass=t,this._mass_inverted=1/t,this.inertiaTensor=this.shape.getInertiaTensor(t)}}),t.RigidBody.prototype.findSupportPoint=function(){var i=new t.Vector3;return function(t,e){this.transform_inverse.rotateVector3Into(t,i),this.shape.findSupportPoint(i,e),this.transform.transformVector3(e)}}(),t.RigidBody.prototype.rayIntersect=function(){var i=new t.Vector3,e=new t.Vector3;return function(t,o,s){this.transform_inverse.transformVector3Into(t,i),this.transform_inverse.transformVector3Into(o,e);var a=this.shape.rayIntersect(i,e);null!=a&&(a.object=this,this.transform.transformVector3(a.point),this.transform.rotateVector3(a.normal),s.push(a))}}(),t.RigidBody.prototype.integrate=function(t){if(this._mass!==1/0){i.scaleVector(this.accumulated_force,this._mass_inverted),i.multiply(this.linear_factor),this.linear_velocity.add(i),this.inverseInertiaTensorWorldFrame.transformVector3Into(this.accumulated_torque,i),i.multiply(this.angular_factor),this.angular_velocity.add(i),this.linear_velocity.scale(Math.pow(1-this.linear_damping,t)),this.angular_velocity.scale(Math.pow(1-this.angular_damping,t)),i.scaleVector(this.linear_velocity,t),this.position.add(i),s.x=this.angular_velocity.x*t,s.y=this.angular_velocity.y*t,s.z=this.angular_velocity.z*t,s.w=0,s.multiply(this.rotation);var e=.5;this.rotation.x+=e*s.x,this.rotation.y+=e*s.y,this.rotation.z+=e*s.z,this.rotation.w+=e*s.w,this.rotation.normalize(),this.accumulated_force.x=this.accumulated_force.y=this.accumulated_force.z=0,this.accumulated_torque.x=this.accumulated_torque.y=this.accumulated_torque.z=0,this.solver_impulse[0]=this.solver_impulse[1]=this.solver_impulse[2]=this.solver_impulse[3]=this.solver_impulse[4]=this.solver_impulse[5]=0,this.push_velocity.x=this.push_velocity.y=this.push_velocity.z=0,this.turn_velocity.x=this.turn_velocity.y=this.turn_velocity.z=0}},t.RigidBody.prototype.setGravity=function(i,e,o){this.gravity?(this.gravity.x=i,this.gravity.y=e,this.gravity.z=o):this.gravity=new t.Vector3(i,e,o)},t.RigidBody.prototype.applyImpulse=function(t){i.multiplyVectors(t,this.linear_factor),this.linear_velocity.add(i)},t.RigidBody.prototype.applyForce=function(t){this.accumulated_force.add(t)},t.RigidBody.prototype.applyForceAtWorldPoint=function(t,e){i.copy(e),i.subtract(this.position),i.cross(t),this.accumulated_force.add(t),this.accumulated_torque.add(i)},t.RigidBody.prototype.applyForceAtLocalPoint=function(t,e){this.transform.transformVector3Into(e,i),this.applyForceAtWorldPoint(t,i)},t.RigidBody.prototype.getVelocityInLocalPoint=function(t,i){this._mass===1/0?i.set(0,0,0):(i.copy(this.angular_velocity),i.cross(t),i.add(this.linear_velocity))},t.RigidBody.prototype.updateDerived=function(){this.rotation.normalize(),this.transform.makeTransform(this.rotation,this.position),this.transform.invertInto(this.transform_inverse),this._mass!==1/0&&(n.fromMatrix4(this.transform_inverse),n.transposeInto(r),r.multiply(this.inertiaTensor),this.inertiaTensorWorldFrame.multiplyFrom(r,n),this.inertiaTensorWorldFrame.invertInto(this.inverseInertiaTensorWorldFrame)),this.aabb.transform(this.shape.aabb,this.transform)},t.ForceGenerator=function(i){this.force=i||new t.Vector3,this.enabled=!0,this.affected=[]},t.ForceGenerator.prototype.applyForce=function(){if(this.enabled){var t,i;for(t=0,i=this.affected.length;i>t;t++)this.affected[t].applyForce(this.force)}},t.ForceGenerator.prototype.enable=function(){this.enabled=!0},t.ForceGenerator.prototype.disable=function(){this.enabled=!1},t.ForceGenerator.prototype.affect=function(t){var i,e;for(i=0,e=this.affected.length;e>i;i++)if(this.affected[i]===t)return;this.affected.push(t)},t.ForceGenerator.prototype.unaffect=function(t){var i,e;for(i=0,e=this.affected.length;e>i;i++)if(this.affected[i]===t)return void this.affected.splice(i,1)},t.BasicBroadphase=function(){this.bodies=[],this.collision_pairs=[]},t.BasicBroadphase.prototype.addBody=function(t){this.bodies.push(t)},t.BasicBroadphase.prototype.removeBody=function(t){var i,e=this.bodies.length;for(i=0;e>i;i++)if(this.bodies[i]===t){this.bodies.splice(i,1);break}},t.BasicBroadphase.prototype.update=function(){var i,e,o,s,a=this.bodies.length;for(this.collision_pairs.length=0,i=0;a>i;i++)for(o=this.bodies[i],e=0;a>e;e++)e>=i||(s=this.bodies[e],t.CollisionUtils.canBodiesCollide(o,s)&&o.aabb.intersects(s.aabb)&&this.collision_pairs.push([s,o]))},t.BasicBroadphase.prototype.intersectsWith=function(t){var i,e,o=this.bodies.length,s=[];for(i=0;o>i;i++)e=this.bodies[i],t!==e&&t.aabb.intersects(e.aabb)&&s.push(e);return s},t.BasicBroadphase.prototype.rayIntersect=function(t,i){var e,o,s=this.bodies.length,a=[];for(e=0;s>e;e++)o=this.bodies[e],o.aabb.testRayIntersect(t,i)&&o.rayIntersect(t,i,a);return a},function(){var i=function(t,i,e){this.type=t,this.body=i,this.position=e,this.prev=null,this.next=null};i.TYPES={START:0,END:1};var e=function(){this.first=null,this.last=null};t.SAPBroadphase=function(){this.markers_x=new e,this.markers_y=new e,this.markers_z=new e,this.overlap_counter={},this.collision_pairs=[],this.pending_bodies=[]},t.SAPBroadphase.prototype={incrementOverlaps:function(i,e){if(t.CollisionUtils.canBodiesCollide(i,e)){var o=i.id<e.id?i.id+"-"+e.id:e.id+"-"+i.id;this.overlap_counter.hasOwnProperty(o)||(this.overlap_counter[o]=0),this.overlap_counter[o]++,3===this.overlap_counter[o]&&this.collision_pairs.push([i.id<e.id?i:e,i.id<e.id?e:i])}},decrementOverlaps:function(t,i){var e=t.id<i.id?t.id+"-"+i.id:i.id+"-"+t.id;this.overlap_counter.hasOwnProperty(e)||(this.overlap_counter[e]=0),this.overlap_counter[e]--,0===this.overlap_counter[e]?delete this.overlap_counter[e]:2===this.overlap_counter[e]&&(this.collision_pairs=this.collision_pairs.filter(function(e){return e[0]===t&&e[1]===i?!1:e[0]===i&&e[1]===t?!1:!0}))},addBody:function(t){this.pending_bodies.push(t)},removeBody:function(t){var i=this.pending_bodies.indexOf(t);if(-1!==i)return void this.pending_bodies.splice(i,1);for(var e,o,s=this.markers_x.first;s;)s.body===t&&(e=s.next,o=s.prev,null!=e?(e.prev=o,null!=o&&(o.next=e)):this.markers_x.last=o,null!=o?(o.next=e,null!=e&&(e.prev=o)):this.markers_x.first=e),s=s.next;for(s=this.markers_y.first;s;)s.body===t&&(e=s.next,o=s.prev,null!=e?(e.prev=o,null!=o&&(o.next=e)):this.markers_y.last=o,null!=o?(o.next=e,null!=e&&(e.prev=o)):this.markers_y.first=e),s=s.next;for(s=this.markers_z.first;s;)s.body===t&&(e=s.next,o=s.prev,null!=e?(e.prev=o,null!=o&&(o.next=e)):this.markers_z.last=o,null!=o?(o.next=e,null!=e&&(e.prev=o)):this.markers_z.first=e),s=s.next;this.collision_pairs=this.collision_pairs.filter(function(i){return i[0]===t||i[1]===t?!1:!0})},insertPending:function(){for(var t;t=this.pending_bodies.pop();){t.updateDerived();var e=new i(i.TYPES.START,t,t.aabb.min.x),o=new i(i.TYPES.START,t,t.aabb.min.y),s=new i(i.TYPES.START,t,t.aabb.min.z),a=new i(i.TYPES.END,t,t.aabb.max.x),n=new i(i.TYPES.END,t,t.aabb.max.y),r=new i(i.TYPES.END,t,t.aabb.max.z);this.insert(this.markers_x,e),this.insert(this.markers_x,a),this.insert(this.markers_y,o),this.insert(this.markers_y,n),this.insert(this.markers_z,s),this.insert(this.markers_z,r)}},insert:function(t,i){null==t.first?t.first=t.last=i:(i.prev=t.last,t.last.next=i,t.last=i,this.sort(t,i))},sort:function(t,e){for(var o;null!=e.prev&&(e.position<e.prev.position||e.position===e.prev.position&&e.type===i.TYPES.START&&e.prev.type===i.TYPES.END);)o=e.prev,e.type!==o.type&&(e.type===i.TYPES.START?this.incrementOverlaps(e.body,o.body):this.decrementOverlaps(e.body,o.body)),e.prev=o.prev,o.next=e.next,e.next=o,o.prev=e,null==e.prev?t.first=e:e.prev.next=e,null==o.next?t.last=o:o.next.prev=o},update:function(){this.insertPending();for(var t=this.markers_x.first;t;)t.position=t.type===i.TYPES.START?t.body.aabb.min.x:t.body.aabb.max.x,this.sort(this.markers_x,t),t=t.next;for(t=this.markers_y.first;t;)t.position=t.type===i.TYPES.START?t.body.aabb.min.y:t.body.aabb.max.y,this.sort(this.markers_y,t),t=t.next;for(t=this.markers_z.first;t;)t.position=t.type===i.TYPES.START?t.body.aabb.min.z:t.body.aabb.max.z,this.sort(this.markers_z,t),t=t.next},intersectsWith:function(t){this.addBody(t),this.update();var i=this.collision_pairs.filter(function(i){return i[0]===t||i[1]===t?!0:!1}).map(function(i){return i[0]===t?i[1]:i[0]});return this.removeBody(t),i},rayIntersect:function(t,e){this.pending_bodies.length>0&&this.update();var o,s,a,n,r,c,h,l,p={},b=[],_={},u={};for(a=this.markers_x.first,n=!1,p={},o=t.x<e.x?t.x:e.x,s=t.x<e.x?e.x:t.x;a;){if(a.type===i.TYPES.START&&(p[a.body.id]=a.body),a.position>=o)if(n===!1)for(n=!0,l=Object.keys(p),r=0;r<l.length;r++)h=l[r],c=p[h],null!=c&&(_[c.id]=c,u[c.id]=u[c.id]?u[c.id]+1:1);else a.type===i.TYPES.START&&(_[a.body.id]=a.body,u[a.body.id]=u[a.body.id]?u[a.body.id]+1:1);if(a.type===i.TYPES.END&&(p[a.body.id]=null),a.position>s)break;a=a.next}for(l=Object.keys(u),r=0;r<l.length;r++){var f=l[r];1===u[f]&&_[f].aabb.testRayIntersect(t,e)&&_[f].rayIntersect(t,e,b)}return b}}}(),t.BoxSphere=function(s,a){var n,r,c=s.shape instanceof t.SphereShape?s:a,h=s.shape instanceof t.SphereShape?a:s;return h.transform_inverse.transformVector3Into(c.position,i),Math.abs(i.x)-c.shape.radius>h.shape.half_width||Math.abs(i.y)-c.shape.radius>h.shape.half_height||Math.abs(i.z)-c.shape.radius>h.shape.half_depth||(e.x=e.y=e.z=0,r=i.x,r>h.shape.half_width?r=h.shape.half_width:r<-h.shape.half_width&&(r=-h.shape.half_width),e.x=r,r=i.y,r>h.shape.half_height?r=h.shape.half_height:r<-h.shape.half_height&&(r=-h.shape.half_height),e.y=r,r=i.z,r>h.shape.half_depth?r=h.shape.half_depth:r<-h.shape.half_depth&&(r=-h.shape.half_depth),e.z=r,o.subtractVectors(e,i),r=o.lengthSquared(),r>c.shape.radius*c.shape.radius)?void 0:(n=t.ObjectPool.getObject("ContactDetails"),n.object_a=c,n.object_b=h,0===r?t.BoxSphere.spherePenetration(h.shape,i,e,n):(n.contact_normal.subtractVectors(e,i),n.penetration_depth=-n.contact_normal.length(),n.contact_normal.scale(-1/n.penetration_depth),n.contact_point_in_b.copy(e)),n.penetration_depth+=c.shape.radius,h.transform.rotateVector3(n.contact_normal),c.transform_inverse.rotateVector3Into(n.contact_normal,n.contact_point_in_a),n.contact_point_in_a.scale(c.shape.radius),n.contact_point.scaleVector(n.contact_normal,c.shape.radius-n.penetration_depth/2),n.contact_point.add(c.position),n.restitution=(c.restitution+h.restitution)/2,n.friction=(c.friction+h.friction)/2,n)},t.BoxSphere.spherePenetration=function(t,i,o,s){var a,n;i.x<0?(a=t.half_width+i.x,o.x=-t.half_width,o.y=o.z=0,s.penetration_depth=a):(a=t.half_width-i.x,o.x=t.half_width,o.y=o.z=0,s.penetration_depth=a),i.y<0?(n=t.half_height+i.y,a>n&&(a=n,o.y=-t.half_height,o.x=o.z=0,s.penetration_depth=a)):(n=t.half_height-i.y,a>n&&(a=n,o.y=t.half_height,o.x=o.z=0,s.penetration_depth=a)),i.z<0?(n=t.half_depth+i.z,a>n&&(o.z=-t.half_depth,o.x=o.y=0,s.penetration_depth=a)):(n=t.half_depth-i.z,a>n&&(o.z=t.half_depth,o.x=o.y=0,s.penetration_depth=a)),s.contact_point_in_b.copy(e),s.contact_normal.scaleVector(s.contact_point_in_b,-1),s.contact_normal.normalize()},t.GjkEpa={margins:.01,result:null,max_iterations:20,epa_condition:.001,SupportPoint:function(t,i,e){this.witness_a=t,this.witness_b=i,this.point=e},findSupportPoint:function(){var i=new t.Vector3;return function(t,e,o,s){t.findSupportPoint(o,s.witness_a),i.scaleVector(o,-1),e.findSupportPoint(i,s.witness_b),s.point.subtractVectors(s.witness_a,s.witness_b)}}(),testCollision:function(i,e){var o=t.GjkEpa.GJK(i,e);return null!=t.GjkEpa.result?t.GjkEpa.result:null!=o?t.GjkEpa.EPA(o):void 0},GJK:function(){return function(i,e){var o,s=new t.GjkEpa.Simplex(i,e);for(t.GjkEpa.result=null;o=s.addPoint(););return o===!1?(t.GjkEpa.freeSimplex(s),null):s}}(),freeSimplex:function(i){for(var e=0,o=i.points.length;o>e;e++)t.ObjectPool.freeObject("GJK2SupportPoint",i.points[e])},freePolyhedron:function(i){for(var e=t.ObjectPool.pools.GJK2SupportPoint,o=0,s=i.faces.length;s>o;o++)-1===e.indexOf(i.faces[o].a)&&t.ObjectPool.freeObject("GJK2SupportPoint",i.faces[o].a),-1===e.indexOf(i.faces[o].b)&&t.ObjectPool.freeObject("GJK2SupportPoint",i.faces[o].b),-1===e.indexOf(i.faces[o].c)&&t.ObjectPool.freeObject("GJK2SupportPoint",i.faces[o].c)},EPA:function(){var e=new t.Vector3,o={a:new t.Vector3,b:new t.Vector3,c:new t.Vector3};return function(s){for(var a=new t.GjkEpa.Polyhedron(s),n=0;++n;){a.findFaceClosestToOrigin(),i.copy(a.closest_face_distance<t.EPSILON?a.faces[a.closest_face].normal:a.closest_point);var r=t.ObjectPool.getObject("GJK2SupportPoint");t.GjkEpa.findSupportPoint(s.object_a,s.object_b,i,r),i.subtractVectors(r.point,a.closest_point);var c=i.lengthSquared();if(n===t.GjkEpa.max_iterations||c<t.GjkEpa.epa_condition&&a.closest_face_distance>t.EPSILON){var h=t.ObjectPool.getObject("ContactDetails");return h.object_a=s.object_a,h.object_b=s.object_b,h.contact_normal.normalizeVector(a.closest_point),0===h.contact_normal.lengthSquared()&&h.contact_normal.subtractVectors(h.object_b.position,h.object_a.position),h.contact_normal.normalize(),t.GeometryMethods.findBarycentricCoordinates(a.closest_point,a.faces[a.closest_face].a.point,a.faces[a.closest_face].b.point,a.faces[a.closest_face].c.point,e),isNaN(e.x)?(t.GjkEpa.freePolyhedron(a),null):(o.a.scaleVector(a.faces[a.closest_face].a.witness_a,e.x),o.b.scaleVector(a.faces[a.closest_face].b.witness_a,e.y),o.c.scaleVector(a.faces[a.closest_face].c.witness_a,e.z),h.contact_point_in_a.addVectors(o.a,o.b),h.contact_point_in_a.add(o.c),o.a.scaleVector(a.faces[a.closest_face].a.witness_b,e.x),o.b.scaleVector(a.faces[a.closest_face].b.witness_b,e.y),o.c.scaleVector(a.faces[a.closest_face].c.witness_b,e.z),h.contact_point_in_b.addVectors(o.a,o.b),h.contact_point_in_b.add(o.c),h.contact_point.addVectors(h.contact_point_in_a,h.contact_point_in_b),h.contact_point.scale(.5),h.object_a.transform_inverse.transformVector3(h.contact_point_in_a),h.object_b.transform_inverse.transformVector3(h.contact_point_in_b),h.penetration_depth=a.closest_point.length()+t.GjkEpa.margins,h.restitution=(s.object_a.restitution+s.object_b.restitution)/2,h.friction=(s.object_a.friction+s.object_b.friction)/2,t.GjkEpa.freePolyhedron(a),h)}a.addVertex(r)}return t.GjkEpa.freePolyhedron(a),null}}(),Face:function(o,s,a,n){this.active=!0,this.a=s,this.b=a,this.c=n,this.normal=new t.Vector3,this.neighbors=[],i.subtractVectors(a.point,s.point),e.subtractVectors(n.point,s.point),this.normal.crossVectors(i,e),this.normal.normalize()}},t.GjkEpa.Polyhedron=function(i){this.closest_face=null,this.closest_face_distance=null,this.closest_point=new t.Vector3,this.faces=[new t.GjkEpa.Face(this,i.points[2],i.points[1],i.points[0]),new t.GjkEpa.Face(this,i.points[3],i.points[1],i.points[2]),new t.GjkEpa.Face(this,i.points[1],i.points[3],i.points[0]),new t.GjkEpa.Face(this,i.points[0],i.points[3],i.points[2])],this.faces[0].neighbors.push(this.faces[1],this.faces[2],this.faces[3]),this.faces[1].neighbors.push(this.faces[2],this.faces[0],this.faces[3]),this.faces[2].neighbors.push(this.faces[1],this.faces[3],this.faces[0]),this.faces[3].neighbors.push(this.faces[2],this.faces[1],this.faces[0])},t.GjkEpa.Polyhedron.prototype={addVertex:function(i){var e,o,s,a,n,r=[],c=[];for(this.faces[this.closest_face].silhouette(i,r),e=0;e<r.length-5;e+=5){if(s=r[e+3],a=r[e+4],0!==e&&n!==s)for(o=e+5;o<r.length;o+=5)if(r[o+3]===n){var h=r.slice(e,e+5);r[e]=r[o],r[e+1]=r[o+1],r[e+2]=r[o+2],r[e+3]=r[o+3],r[e+4]=r[o+4],r[o]=h[0],r[o+1]=h[1],r[o+2]=h[2],r[o+3]=h[3],r[o+4]=h[4],s=r[e+3],a=r[e+4];break}n=a}for(e=0;e<r.length;e+=5){var l=r[e];s=r[e+3],a=r[e+4];var p=new t.GjkEpa.Face(this,a,i,s);p.neighbors[2]=r[e],c.push(p),l.neighbors[l.neighbors.indexOf(r[e+2])]=p}for(e=0;e<c.length;e++)c[e].neighbors[0]=c[e+1===c.length?0:e+1],c[e].neighbors[1]=c[0>e-1?c.length-1:e-1];return Array.prototype.push.apply(this.faces,c),r},findFaceClosestToOrigin:function(){var i=new t.Vector3,e=new t.Vector3;return function(){this.closest_face_distance=1/0;var o,s;for(s=0;s<this.faces.length;s++)this.faces[s].active!==!1&&(t.GeometryMethods.findClosestPointInTriangle(i,this.faces[s].a.point,this.faces[s].b.point,this.faces[s].c.point,e),o=e.lengthSquared(),o<this.closest_face_distance&&(this.closest_face_distance=o,this.closest_face=s,this.closest_point.copy(e)))}}()},t.GjkEpa.Face.prototype={classifyVertex:function(t){var i=this.normal.dot(this.a.point);return this.normal.dot(t.point)-i},silhouette:function(t,i,e){if(this.active!==!1)if(this.classifyVertex(t)>0)this.active=!1,this.neighbors[0].silhouette(t,i,this),this.neighbors[1].silhouette(t,i,this),this.neighbors[2].silhouette(t,i,this);else if(e){var o,s,a=this.neighbors.indexOf(e);0===a?(o=this.a,s=this.b):1===a?(o=this.b,s=this.c):(o=this.c,s=this.a),i.push(this,a,e,s,o)}}},function(){var s=new t.Vector3,a=new t.Vector3,n=new t.Vector3,r=new t.Vector3,c=new t.Vector3,h=new t.Vector3,l={a:new t.Vector3,b:new t.Vector3,c:new t.Vector3};t.GjkEpa.Simplex=function(i,e){this.object_a=i,this.object_b=e,this.points=[],this.iterations=0,this.next_direction=new t.Vector3,this.updateDirection()},t.GjkEpa.Simplex.prototype={addPoint:function(){if(++this.iterations===t.GjkEpa.max_iterations)return!1;var e=t.ObjectPool.getObject("GJK2SupportPoint");if(t.GjkEpa.findSupportPoint(this.object_a,this.object_b,this.next_direction,e),this.points.push(e),e.point.dot(this.next_direction)<0&&this.points.length>1){if(this.points.length>=3){t.GeometryMethods.findClosestPointInTriangle(s,this.points[0].point,this.points[1].point,this.points[2].point,i);var o=i.lengthSquared();if(o<=t.GjkEpa.margins*t.GjkEpa.margins){var a=t.ObjectPool.getObject("ContactDetails");return a.object_a=this.object_a,a.object_b=this.object_b,a.contact_normal.normalizeVector(i),0===a.contact_normal.lengthSquared()&&a.contact_normal.subtractVectors(a.object_b.position,a.object_a.position),a.contact_normal.normalize(),a.contact_normal.scale(-1),a.penetration_depth=t.GjkEpa.margins-Math.sqrt(o),t.GeometryMethods.findBarycentricCoordinates(i,this.points[0].point,this.points[1].point,this.points[2].point,h),isNaN(h.x)?!1:(l.a.scaleVector(this.points[0].witness_a,h.x),l.b.scaleVector(this.points[1].witness_a,h.y),l.c.scaleVector(this.points[2].witness_a,h.z),a.contact_point_in_a.addVectors(l.a,l.b),a.contact_point_in_a.add(l.c),a.contact_point_in_b.scaleVector(a.contact_normal,-a.penetration_depth),a.contact_point_in_b.add(a.contact_point_in_a),a.contact_point.addVectors(a.contact_point_in_a,a.contact_point_in_b),a.contact_point.scale(.5),a.object_a.transform_inverse.transformVector3(a.contact_point_in_a),a.object_b.transform_inverse.transformVector3(a.contact_point_in_b),a.restitution=(this.object_a.restitution+this.object_b.restitution)/2,a.friction=(this.object_a.friction+this.object_b.friction)/2,t.GjkEpa.result=a,null)}}return!1}return this.updateDirection()===!0?null:e},findDirectionFromLine:function(){a.scaleVector(this.points[1].point,-1),n.subtractVectors(this.points[0].point,this.points[1].point),n.dot(a)<0?(this.next_direction.copy(a),t.ObjectPool.freeObject("GJK2SupportPoint",this.points[1]),this.points.length=1):(this.next_direction.crossVectors(n,a),this.next_direction.cross(n),0===this.next_direction.x&&0===this.next_direction.y&&0===this.next_direction.z&&(n.normalize(),this.next_direction.x=1-Math.abs(n.x),this.next_direction.y=1-Math.abs(n.y),this.next_direction.z=1-Math.abs(n.z)))},findDirectionFromTriangle:function(){var s=this.points[2],c=this.points[1],h=this.points[0];a.scaleVector(s.point,-1),n.subtractVectors(c.point,s.point),r.subtractVectors(h.point,s.point),i.crossVectors(n,r),e.crossVectors(n,i),o.crossVectors(i,r),o.dot(a)>=0?r.dot(a)>=0?(this.points.length=0,this.points.push(h,s),t.ObjectPool.freeObject("GJK2SupportPoint",c),this.next_direction.crossVectors(r,a),this.next_direction.cross(r)):n.dot(a)>=0?(this.points.length=0,this.points.push(c,s),t.ObjectPool.freeObject("GJK2SupportPoint",h),this.next_direction.crossVectors(n,a),this.next_direction.cross(n)):(this.points.length=0,this.points.push(s),t.ObjectPool.freeObject("GJK2SupportPoint",c),t.ObjectPool.freeObject("GJK2SupportPoint",h)):e.dot(a)>=0?n.dot(a)>=0?(this.points.length=0,
	this.points.push(c,s),t.ObjectPool.freeObject("GJK2SupportPoint",h),this.next_direction.crossVectors(n,a),this.next_direction.cross(n)):(this.points.length=0,this.points.push(s),t.ObjectPool.freeObject("GJK2SupportPoint",c),t.ObjectPool.freeObject("GJK2SupportPoint",h)):i.dot(a)>=0?(this.next_direction.copy(i),this.points.length=0,this.points.push(s,c,h)):(this.next_direction.copy(i),this.next_direction.scale(-1))},getFaceNormal:function(t,i,e,o){n.subtractVectors(i.point,t.point),r.subtractVectors(e.point,t.point),o.crossVectors(n,r),o.normalize()},faceNormalDotOrigin:function(t,o,s){return this.getFaceNormal(t,o,s,i),e.addVectors(t.point,o.point),e.add(s.point),e.scale(-3),e.normalize(),i.dot(e)},findDirectionFromTetrahedron:function(){var e,o=this.points[3],s=this.points[2],a=this.points[1],n=this.points[0],r=null,c=t.EPSILON;return e=this.faceNormalDotOrigin(s,a,n),e>c&&(r=1,c=e),e=this.faceNormalDotOrigin(o,a,s),e>c&&(r=2,c=e),e=this.faceNormalDotOrigin(a,o,n),e>c&&(r=3,c=e),e=this.faceNormalDotOrigin(n,o,s),e>c&&(r=4,c=e),null===r?!0:void(1===r?(this.points.length=0,this.points.push(s,a,n),this.getFaceNormal(s,a,n,i),this.next_direction.copy(i)):2===r?(this.points.length=0,this.points.push(o,a,s),this.getFaceNormal(o,a,s,i),this.next_direction.copy(i)):3===r?(this.points.length=0,this.points.push(a,o,n),this.getFaceNormal(a,o,n,i),this.next_direction.copy(i)):4===r&&(this.points.length=0,this.points.push(n,o,s),this.getFaceNormal(n,o,s,i),this.next_direction.copy(i)))},containsOrigin:function(){var t=this.points[3],e=this.points[2],o=this.points[1],s=this.points[0];return n.subtractVectors(s.point,t.point),c.subtractVectors(o.point,t.point),i.crossVectors(n,c),i.dot(t.point)>0?!1:(n.subtractVectors(o.point,t.point),c.subtractVectors(e.point,t.point),i.crossVectors(n,c),i.dot(t.point)>0?!1:(n.subtractVectors(e.point,t.point),c.subtractVectors(s.point,t.point),i.crossVectors(n,c),i.dot(t.point)>0?!1:(n.subtractVectors(s.point,o.point),c.subtractVectors(e.point,o.point),i.crossVectors(n,c),i.dot(s.point)>0?!1:!0)))},updateDirection:function(){if(0===this.points.length)this.next_direction.subtractVectors(this.object_b.position,this.object_a.position);else if(1===this.points.length)this.next_direction.scale(-1);else if(2===this.points.length)this.findDirectionFromLine();else{if(3!==this.points.length)return this.findDirectionFromTetrahedron();this.findDirectionFromTriangle()}}}}(),t.SphereSphere=function(e,o){var s=e.position,a=o.position;i.subtractVectors(a,s);var n=i.length();if(!(n>e.shape.radius+o.shape.radius)){var r=t.ObjectPool.getObject("ContactDetails");return r.object_a=e,r.object_b=o,r.contact_normal.scaleVector(i,1/n),i.scale(-.5),r.contact_point.addVectors(i,s),r.penetration_depth=e.shape.radius+o.shape.radius-n,r.contact_point_in_a.scaleVector(r.contact_normal,r.object_a.shape.radius),r.contact_point_in_a.add(r.object_a.position),r.contact_point_in_b.scaleVector(r.contact_normal,-r.object_b.shape.radius),r.contact_point_in_b.add(r.object_b.position),r.contact_point.addVectors(r.contact_point_in_a,r.contact_point_in_b),r.contact_point.scale(.5),r.object_a.transform_inverse.transformVector3(r.contact_point_in_a),r.object_b.transform_inverse.transformVector3(r.contact_point_in_b),r.restitution=(e.restitution+o.restitution)/2,r.friction=(e.friction+o.friction)/2,r}},t.TriangleTriangle=function(o,s){var a=s.classifyVertex(o.a),n=s.classifyVertex(o.b),r=s.classifyVertex(o.c);if(a>0&&n>0&&r>0||0>a&&0>n&&0>r)return null;var c=o.classifyVertex(s.a),h=o.classifyVertex(s.b),l=o.classifyVertex(s.c);if(c>0&&h>0&&l>0||0>c&&0>h&&0>l)return null;var p=new t.Vector3;p.crossVectors(o.normal,s.normal),p.normalize();var b,_=p.dot(o.a),u=p.dot(o.b),f=p.dot(o.c),d=p.dot(s.a),m=p.dot(s.b),y=p.dot(s.c),j=o.a,x=o.b,w=o.c,v=s.a,g=s.b,V=s.c;Math.sign(a)===Math.sign(n)?(b=a,a=r,r=b,b=_,_=f,f=b,b=j,j=w,w=b):Math.sign(a)===Math.sign(r)&&(b=a,a=n,n=b,b=_,_=u,u=b,b=j,j=x,x=b),Math.sign(c)===Math.sign(h)?(b=c,c=l,l=b,b=d,d=y,y=b,b=v,v=V,V=b):Math.sign(c)===Math.sign(l)&&(b=c,c=h,h=b,b=d,d=m,m=b,b=v,v=g,g=b);var z=_+(u-_)*(a/(a-n)),B=_+(f-_)*(a/(a-r)),S=d+(m-d)*(c/(c-h)),C=d+(y-d)*(c/(c-l));if(z>B&&(b=z,z=B,B=b,b=u,u=f,f=b,b=x,x=w,w=b),S>C&&(b=S,S=C,C=b,b=m,m=y,y=b,b=g,g=V,V=b),z>=S&&C>=z||B>=S&&C>=B||S>=z&&B>=S||C>=z&&B>=C){var P=t.ObjectPool.getObject("ContactDetails");P.object_a=o,P.object_b=s;var M=new t.Vector3,O=new t.Vector3,I=new t.Vector3,A=new t.Vector3,T=new t.Vector3,E=new t.Vector3,k=!1,G=!1;return s.classifyVertex(j)<=0?(k=!0,t.GeometryMethods.findClosestPointInTriangle(j,v,g,V,O),M.copy(j),I.copy(s.normal),I.scale(-1)):z>=S&&C>=z?(k=!0,t.GeometryMethods.findClosestPointInTriangle(x,v,g,V,O),M.copy(x),I.copy(s.normal),I.scale(-1)):B>=S&&C>=B&&(k=!0,t.GeometryMethods.findClosestPointInTriangle(w,v,g,V,O),M.copy(w),I.copy(s.normal),I.scale(-1)),o.classifyVertex(v)<=0?(G=!0,t.GeometryMethods.findClosestPointInTriangle(v,j,x,w,A),T.copy(v),E.copy(o.normal)):S>=z&&B>=S?(G=!0,t.GeometryMethods.findClosestPointInTriangle(g,j,x,w,A),T.copy(g),E.copy(o.normal)):C>=z&&B>=C&&(G=!0,t.GeometryMethods.findClosestPointInTriangle(V,j,x,w,A),T.copy(V),E.copy(o.normal)),i.subtractVectors(M,O),e.subtractVectors(A,T),!G||k&&i.lengthSquared()<e.lengthSquared()?(P.contact_point_in_a.copy(M),P.contact_point_in_b.copy(O),P.contact_normal.copy(I)):(P.contact_point_in_a.copy(A),P.contact_point_in_b.copy(T),P.contact_normal.copy(E)),i.subtractVectors(P.contact_point_in_a,P.contact_point_in_b),P.penetration_depth=i.length(),P.contact_point.addVectors(P.contact_point_in_a,P.contact_point_in_b),P.contact_point.scale(.5),P}return null},t.Constraint=function(){this.active=!0,this.object_a=null,this.object_b=null,this.rows=[],this.factor=1,this.last_impulse=new t.Vector3,this.breaking_threshold=0,this.listeners={}},t.EventEmitter.apply(t.Constraint),t.Constraint.prototype.deactivate=function(){this.active=!1,this.emit("deactivate")},t.Constraint.prototype.update=function(){},t.ConstraintRow=function(){this.jacobian=new Float64Array(12),this.B=new Float64Array(12),this.D=0,this.lower_limit=-(1/0),this.upper_limit=1/0,this.bias=0,this.multiplier=0,this.multiplier_cached=0,this.eta=0,this.eta_row=new Float64Array(12)},t.ConstraintRow.prototype.computeB=function(t){var e;null!=t.object_a&&t.object_a._mass!==1/0?(e=t.object_a._mass_inverted,this.B[0]=e*this.jacobian[0]*t.object_a.linear_factor.x,this.B[1]=e*this.jacobian[1]*t.object_a.linear_factor.y,this.B[2]=e*this.jacobian[2]*t.object_a.linear_factor.z,i.x=this.jacobian[3],i.y=this.jacobian[4],i.z=this.jacobian[5],t.object_a.inverseInertiaTensorWorldFrame.transformVector3(i),this.B[3]=i.x*t.object_a.angular_factor.x,this.B[4]=i.y*t.object_a.angular_factor.y,this.B[5]=i.z*t.object_a.angular_factor.z):(this.B[0]=this.B[1]=this.B[2]=0,this.B[3]=this.B[4]=this.B[5]=0),null!=t.object_b&&t.object_b._mass!==1/0?(e=t.object_b._mass_inverted,this.B[6]=e*this.jacobian[6]*t.object_b.linear_factor.x,this.B[7]=e*this.jacobian[7]*t.object_b.linear_factor.y,this.B[8]=e*this.jacobian[8]*t.object_b.linear_factor.z,i.x=this.jacobian[9],i.y=this.jacobian[10],i.z=this.jacobian[11],t.object_b.inverseInertiaTensorWorldFrame.transformVector3(i),this.B[9]=i.x*t.object_b.linear_factor.x,this.B[10]=i.y*t.object_b.linear_factor.y,this.B[11]=i.z*t.object_b.linear_factor.z):(this.B[6]=this.B[7]=this.B[8]=0,this.B[9]=this.B[10]=this.B[11]=0)},t.ConstraintRow.prototype.computeD=function(){this.D=this.jacobian[0]*this.B[0]+this.jacobian[1]*this.B[1]+this.jacobian[2]*this.B[2]+this.jacobian[3]*this.B[3]+this.jacobian[4]*this.B[4]+this.jacobian[5]*this.B[5]+this.jacobian[6]*this.B[6]+this.jacobian[7]*this.B[7]+this.jacobian[8]*this.B[8]+this.jacobian[9]*this.B[9]+this.jacobian[10]*this.B[10]+this.jacobian[11]*this.B[11]},t.ConstraintRow.prototype.computeEta=function(t,e){var o,s=1/e;null==t.object_a||t.object_a._mass===1/0?this.eta_row[0]=this.eta_row[1]=this.eta_row[2]=this.eta_row[3]=this.eta_row[4]=this.eta_row[5]=0:(o=t.object_a._mass_inverted,this.eta_row[0]=(t.object_a.linear_velocity.x+o*t.object_a.accumulated_force.x)*s,this.eta_row[1]=(t.object_a.linear_velocity.y+o*t.object_a.accumulated_force.y)*s,this.eta_row[2]=(t.object_a.linear_velocity.z+o*t.object_a.accumulated_force.z)*s,i.copy(t.object_a.accumulated_torque),t.object_a.inverseInertiaTensorWorldFrame.transformVector3(i),this.eta_row[3]=(t.object_a.angular_velocity.x+i.x)*s,this.eta_row[4]=(t.object_a.angular_velocity.y+i.y)*s,this.eta_row[5]=(t.object_a.angular_velocity.z+i.z)*s),null==t.object_b||t.object_b._mass===1/0?this.eta_row[6]=this.eta_row[7]=this.eta_row[8]=this.eta_row[9]=this.eta_row[10]=this.eta_row[11]=0:(o=t.object_b._mass_inverted,this.eta_row[6]=(t.object_b.linear_velocity.x+o*t.object_b.accumulated_force.x)*s,this.eta_row[7]=(t.object_b.linear_velocity.y+o*t.object_b.accumulated_force.y)*s,this.eta_row[8]=(t.object_b.linear_velocity.z+o*t.object_b.accumulated_force.z)*s,i.copy(t.object_b.accumulated_torque),t.object_b.inverseInertiaTensorWorldFrame.transformVector3(i),this.eta_row[9]=(t.object_b.angular_velocity.x+i.x)*s,this.eta_row[10]=(t.object_b.angular_velocity.y+i.y)*s,this.eta_row[11]=(t.object_b.angular_velocity.z+i.z)*s);var a=this.jacobian[0]*this.eta_row[0]+this.jacobian[1]*this.eta_row[1]+this.jacobian[2]*this.eta_row[2]+this.jacobian[3]*this.eta_row[3]+this.jacobian[4]*this.eta_row[4]+this.jacobian[5]*this.eta_row[5]+this.jacobian[6]*this.eta_row[6]+this.jacobian[7]*this.eta_row[7]+this.jacobian[8]*this.eta_row[8]+this.jacobian[9]*this.eta_row[9]+this.jacobian[10]*this.eta_row[10]+this.jacobian[11]*this.eta_row[11];this.eta=this.bias*s-a},t.ContactConstraint=function(){t.Constraint.call(this),this.contact=null},t.ContactConstraint.prototype=Object.create(t.Constraint.prototype),t.ContactConstraint.prototype.buildFromContact=function(i){this.object_a=i.object_a,this.object_b=i.object_b,this.contact=i;var e=this,o=function(){this.removeListener("destroy",o),e.deactivate()};this.contact.addListener("destroy",o);var s=this.rows[0]||t.ObjectPool.getObject("ConstraintRow");s.lower_limit=0,s.upper_limit=1/0,this.rows[0]=s,this.update()},t.ContactConstraint.prototype.update=function(){var t=this.rows[0];null==this.object_a||this.object_a._mass===1/0?(t.jacobian[0]=t.jacobian[1]=t.jacobian[2]=0,t.jacobian[3]=t.jacobian[4]=t.jacobian[5]=0):(t.jacobian[0]=-this.contact.contact_normal.x,t.jacobian[1]=-this.contact.contact_normal.y,t.jacobian[2]=-this.contact.contact_normal.z,i.subtractVectors(this.contact.contact_point,this.contact.object_a.position),i.cross(this.contact.contact_normal),t.jacobian[3]=-i.x,t.jacobian[4]=-i.y,t.jacobian[5]=-i.z),null==this.object_b||this.object_b._mass===1/0?(t.jacobian[6]=t.jacobian[7]=t.jacobian[8]=0,t.jacobian[9]=t.jacobian[10]=t.jacobian[11]=0):(t.jacobian[6]=this.contact.contact_normal.x,t.jacobian[7]=this.contact.contact_normal.y,t.jacobian[8]=this.contact.contact_normal.z,i.subtractVectors(this.contact.contact_point,this.contact.object_b.position),i.cross(this.contact.contact_normal),t.jacobian[9]=i.x,t.jacobian[10]=i.y,t.jacobian[11]=i.z),t.bias=0;var e=0;this.object_a._mass!==1/0&&(this.object_a.getVelocityInLocalPoint(this.contact.contact_point_in_a,i),e+=i.dot(this.contact.contact_normal)),this.object_b._mass!==1/0&&(this.object_b.getVelocityInLocalPoint(this.contact.contact_point_in_b,i),e-=i.dot(this.contact.contact_normal)),t.bias+=e*this.contact.restitution},t.FrictionConstraint=function(){t.Constraint.call(this),this.contact=null},t.FrictionConstraint.prototype=Object.create(t.Constraint.prototype),t.FrictionConstraint.prototype.buildFromContact=function(i){this.rows[0]=this.rows[0]||t.ObjectPool.getObject("ConstraintRow"),this.rows[1]=this.rows[1]||t.ObjectPool.getObject("ConstraintRow"),this.object_a=i.object_a,this.object_b=i.object_b,this.contact=i;var e=this,o=function(){this.removeListener("destroy",o),e.deactivate()};this.contact.addListener("destroy",o),this.update()},t.FrictionConstraint.prototype.update=function(){var e=new t.Vector3,s=new t.Vector3,a=new t.Vector3,n=new t.Vector3;return function(){var t=this.rows[0],r=this.rows[1];e.subtractVectors(this.contact.contact_point,this.object_a.position),s.subtractVectors(this.contact.contact_point,this.object_b.position),this.contact.contact_normal.findOrthogonal(a,n),null==this.object_a||this.object_a._mass===1/0?(t.jacobian[0]=t.jacobian[1]=t.jacobian[2]=0,t.jacobian[3]=t.jacobian[4]=t.jacobian[5]=0,r.jacobian[0]=r.jacobian[1]=r.jacobian[2]=0,r.jacobian[3]=r.jacobian[4]=r.jacobian[5]=0):(t.jacobian[0]=-a.x,t.jacobian[1]=-a.y,t.jacobian[2]=-a.z,i.crossVectors(e,a),t.jacobian[3]=-i.x,t.jacobian[4]=-i.y,t.jacobian[5]=-i.z,r.jacobian[0]=-n.x,r.jacobian[1]=-n.y,r.jacobian[2]=-n.z,i.crossVectors(e,n),r.jacobian[3]=-i.x,r.jacobian[4]=-i.y,r.jacobian[5]=-i.z),null==this.object_b||this.object_b._mass===1/0?(t.jacobian[6]=t.jacobian[7]=t.jacobian[8]=0,t.jacobian[9]=t.jacobian[10]=t.jacobian[11]=0,r.jacobian[6]=r.jacobian[7]=r.jacobian[8]=0,r.jacobian[9]=r.jacobian[10]=r.jacobian[11]=0):(t.jacobian[6]=a.x,t.jacobian[7]=a.y,t.jacobian[8]=a.z,i.crossVectors(s,a),t.jacobian[9]=i.x,t.jacobian[10]=i.y,t.jacobian[11]=i.z,r.jacobian[6]=n.x,r.jacobian[7]=n.y,r.jacobian[8]=n.z,i.crossVectors(s,n),r.jacobian[9]=i.x,r.jacobian[10]=i.y,r.jacobian[11]=i.z),this.object_a.getVelocityInLocalPoint(this.contact.contact_point_in_a,i),this.object_a._mass!==1/0?(i.scaleVector(this.object_a.accumulated_force,1/this.object_a._mass),i.add(this.object_a.linear_velocity),this.object_a.inverseInertiaTensorWorldFrame.transformVector3Into(this.object_a.accumulated_torque,o),o.add(this.object_a.angular_velocity),o.cross(this.contact.contact_point_in_a),i.add(o),i.scale(this.object_a._mass)):i.set(0,0,0);var c=25*this.contact.friction;0>c&&(c=0),t.lower_limit=r.lower_limit=-c,t.upper_limit=r.upper_limit=c,t.bias=r.bias=0,this.rows[0]=t,this.rows[1]=r}}(),t.HingeConstraint=function(i,e,o,a,n){t.Constraint.call(this),this.object_a=i,this.hinge_a=e,this.point_a=o,this.object_b=a||null,this.point_b=new t.Vector3,this.hinge_b=new t.Vector3,null!=this.object_b?(this.object_a.rotation.transformVector3Into(this.hinge_a,this.hinge_b),s.invertQuaternion(this.object_b.rotation),s.transformVector3(this.hinge_b),this.point_b=n):(this.object_a.updateDerived(),this.object_a.rotation.transformVector3Into(this.hinge_a,this.hinge_b),this.object_a.transform.transformVector3Into(this.point_a,this.point_b)),this.erp=.1;for(var r=0;5>r;r++)this.rows[r]=t.ObjectPool.getObject("ConstraintRow"),this.rows[r].lower_limit=-(1/0),this.rows[r].upper_limit=1/0,this.rows[r].bias=0,this.rows[r].jacobian[0]=this.rows[r].jacobian[1]=this.rows[r].jacobian[2]=this.rows[r].jacobian[3]=this.rows[r].jacobian[4]=this.rows[r].jacobian[5]=this.rows[r].jacobian[6]=this.rows[r].jacobian[7]=this.rows[r].jacobian[8]=this.rows[r].jacobian[9]=this.rows[r].jacobian[10]=this.rows[r].jacobian[11]=0},t.HingeConstraint.prototype=Object.create(t.Constraint.prototype),t.HingeConstraint.prototype.update=function(){var s=new t.Vector3,a=new t.Vector3,n=new t.Vector3,r=new t.Vector3,c=new t.Vector3;return function(t){this.object_a.rotation.transformVector3Into(this.hinge_a,c),this.object_a.transform.transformVector3Into(this.point_a,i),s.subtractVectors(i,this.object_a.position),this.rows[0].jacobian[0]=-1,this.rows[0].jacobian[1]=0,this.rows[0].jacobian[2]=0,this.rows[0].jacobian[3]=0,this.rows[0].jacobian[4]=-s.z,this.rows[0].jacobian[5]=s.y,this.rows[1].jacobian[0]=0,this.rows[1].jacobian[1]=-1,this.rows[1].jacobian[2]=0,this.rows[1].jacobian[3]=s.z,this.rows[1].jacobian[4]=0,this.rows[1].jacobian[5]=-s.x,this.rows[2].jacobian[0]=0,this.rows[2].jacobian[1]=0,this.rows[2].jacobian[2]=-1,this.rows[2].jacobian[3]=-s.y,this.rows[2].jacobian[4]=s.x,this.rows[2].jacobian[5]=0,c.findOrthogonal(n,r),this.rows[3].jacobian[3]=-n.x,this.rows[3].jacobian[4]=-n.y,this.rows[3].jacobian[5]=-n.z,this.rows[4].jacobian[3]=-r.x,this.rows[4].jacobian[4]=-r.y,this.rows[4].jacobian[5]=-r.z,null!=this.object_b?(this.object_b.transform.transformVector3Into(this.point_b,e),a.subtractVectors(e,this.object_b.position),this.rows[0].jacobian[6]=1,this.rows[0].jacobian[7]=0,this.rows[0].jacobian[8]=0,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=a.z,this.rows[0].jacobian[11]=-a.y,this.rows[1].jacobian[6]=0,this.rows[1].jacobian[7]=1,this.rows[1].jacobian[8]=0,this.rows[1].jacobian[9]=-a.z,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=a.x,this.rows[2].jacobian[6]=0,this.rows[2].jacobian[7]=0,this.rows[2].jacobian[8]=1,this.rows[2].jacobian[9]=a.y,this.rows[2].jacobian[10]=-a.z,this.rows[2].jacobian[11]=0,this.rows[3].jacobian[9]=n.x,this.rows[3].jacobian[10]=n.y,this.rows[3].jacobian[11]=n.z,this.rows[4].jacobian[9]=r.x,this.rows[4].jacobian[10]=r.y,this.rows[4].jacobian[11]=r.z):e.copy(this.point_b),o.subtractVectors(i,e),o.scale(this.erp/t),this.rows[0].bias=o.x,this.rows[1].bias=o.y,this.rows[2].bias=o.z,null!=this.object_b?(this.object_a.rotation.transformVector3Into(this.hinge_a,i),this.object_b.rotation.transformVector3Into(this.hinge_b,e),i.cross(e),this.rows[3].bias=-i.dot(n),this.rows[4].bias=-i.dot(r)):this.rows[3].bias=this.rows[4].bias=0}}(),t.PointConstraint=function(i,e,o,s){t.Constraint.call(this),this.object_a=i,this.point_a=e,this.object_b=o||null,null!=this.object_b?this.point_b=s:(this.point_b=new t.Vector3,this.object_a.updateDerived(),this.object_a.transform.transformVector3Into(this.point_a,this.point_b)),this.erp=.1;for(var a=0;3>a;a++)this.rows[a]=t.ObjectPool.getObject("ConstraintRow"),this.rows[a].lower_limit=-(1/0),this.rows[a].upper_limit=1/0,this.rows[a].bias=0,this.rows[a].jacobian[6]=this.rows[a].jacobian[7]=this.rows[a].jacobian[8]=this.rows[a].jacobian[9]=this.rows[a].jacobian[10]=this.rows[a].jacobian[11]=0},t.PointConstraint.prototype=Object.create(t.Constraint.prototype),t.PointConstraint.prototype.update=function(){var s=new t.Vector3,a=new t.Vector3;return function(t){this.object_a.transform.transformVector3Into(this.point_a,i),s.subtractVectors(i,this.object_a.position),this.rows[0].jacobian[0]=-1,this.rows[0].jacobian[1]=0,this.rows[0].jacobian[2]=0,this.rows[0].jacobian[3]=0,this.rows[0].jacobian[4]=-s.z,this.rows[0].jacobian[5]=s.y,this.rows[1].jacobian[0]=0,this.rows[1].jacobian[1]=-1,this.rows[1].jacobian[2]=0,this.rows[1].jacobian[3]=s.z,this.rows[1].jacobian[4]=0,this.rows[1].jacobian[5]=-s.x,this.rows[2].jacobian[0]=0,this.rows[2].jacobian[1]=0,this.rows[2].jacobian[2]=-1,this.rows[2].jacobian[3]=-s.y,this.rows[2].jacobian[4]=s.x,this.rows[2].jacobian[5]=0,null!=this.object_b?(this.object_b.transform.transformVector3Into(this.point_b,e),a.subtractVectors(e,this.object_b.position),this.rows[0].jacobian[6]=1,this.rows[0].jacobian[7]=0,this.rows[0].jacobian[8]=0,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=a.z,this.rows[0].jacobian[11]=-a.y,this.rows[1].jacobian[6]=0,this.rows[1].jacobian[7]=1,this.rows[1].jacobian[8]=0,this.rows[1].jacobian[9]=-a.z,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=a.x,this.rows[2].jacobian[6]=0,this.rows[2].jacobian[7]=0,this.rows[2].jacobian[8]=1,this.rows[2].jacobian[9]=a.y,this.rows[2].jacobian[10]=-a.z,this.rows[2].jacobian[11]=0):e.copy(this.point_b),o.subtractVectors(i,e),o.scale(this.erp/t),this.rows[0].bias=o.x,this.rows[1].bias=o.y,this.rows[2].bias=o.z}}(),t.SliderConstraint=function(i,e,o){t.Constraint.call(this),this.object_a=i,this.axis=e,this.object_b=o,this.position_error=new t.Vector3,this.position_error.subtractVectors(this.object_b.position,this.object_a.position),s.invertQuaternion(this.object_a.rotation),s.transformVector3(this.position_error),this.rotation_difference=new t.Quaternion,null!=this.object_b&&(s.invertQuaternion(this.object_b.rotation),this.rotation_difference.multiplyQuaternions(s,this.object_a.rotation)),this.erp=.1;for(var a=0;5>a;a++)this.rows[a]=t.ObjectPool.getObject("ConstraintRow"),this.rows[a].lower_limit=-(1/0),this.rows[a].upper_limit=1/0,this.rows[a].bias=0,this.rows[a].jacobian[0]=this.rows[a].jacobian[1]=this.rows[a].jacobian[2]=this.rows[a].jacobian[3]=this.rows[a].jacobian[4]=this.rows[a].jacobian[5]=this.rows[a].jacobian[6]=this.rows[a].jacobian[7]=this.rows[a].jacobian[8]=this.rows[a].jacobian[9]=this.rows[a].jacobian[10]=this.rows[a].jacobian[11]=0},t.SliderConstraint.prototype=Object.create(t.Constraint.prototype),t.SliderConstraint.prototype.update=function(){var i=new t.Vector3,e=new t.Vector3,o=new t.Vector3;return function(t){this.object_a.rotation.transformVector3Into(this.axis,i),i.findOrthogonal(e,o),this._updateLinearConstraints(t,e,o),this._updateAngularConstraints(t,e,o)}}(),t.SliderConstraint.prototype._updateLinearConstraints=function(o,s,a){var n=new t.Vector3;n.subtractVectors(this.object_b.position,this.object_a.position);var r=new t.Vector3;r.crossVectors(n,s),this.rows[0].jacobian[0]=-s.x,this.rows[0].jacobian[1]=-s.y,this.rows[0].jacobian[2]=-s.z,this.rows[0].jacobian[6]=s.x,this.rows[0].jacobian[7]=s.y,this.rows[0].jacobian[8]=s.z,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=0,this.rows[0].jacobian[11]=0,r.crossVectors(n,a),this.rows[1].jacobian[0]=-a.x,this.rows[1].jacobian[1]=-a.y,this.rows[1].jacobian[2]=-a.z,this.rows[1].jacobian[6]=a.x,this.rows[1].jacobian[7]=a.y,this.rows[1].jacobian[8]=a.z,this.rows[1].jacobian[9]=0,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=0,this.object_a.rotation.transformVector3Into(this.position_error,i),e.subtractVectors(n,i),e.scale(this.erp/o),this.rows[0].bias=-s.dot(e),this.rows[1].bias=-a.dot(e)},t.SliderConstraint.prototype._updateAngularConstraints=function(i,e,o,n){this.rows[2].jacobian[3]=this.rows[3].jacobian[4]=this.rows[4].jacobian[5]=-1,this.rows[2].jacobian[9]=this.rows[3].jacobian[10]=this.rows[4].jacobian[11]=1,s.invertQuaternion(this.object_b.rotation),s.multiply(this.object_a.rotation),a.invertQuaternion(this.rotation_difference),a.multiply(s);var r=new t.Vector3;r.x=a.x,r.y=a.y,r.z=a.z,r.scale(this.erp/i)},t.WeldConstraint=function(i,e,o,a){t.Constraint.call(this),this.object_a=i,this.point_a=e,this.object_b=o||null,this.point_b=a||null,this.rotation_difference=new t.Quaternion,null!=this.object_b&&(s.invertQuaternion(this.object_b.rotation),this.rotation_difference.multiplyQuaternions(s,this.object_a.rotation)),this.erp=.1;for(var n=0;3>n;n++)this.rows[n]=t.ObjectPool.getObject("ConstraintRow"),this.rows[n].lower_limit=-(1/0),this.rows[n].upper_limit=1/0,this.rows[n].bias=0,null==this.object_b&&(this.rows[n].jacobian[0]=this.rows[n].jacobian[1]=this.rows[n].jacobian[2]=this.rows[n].jacobian[4]=this.rows[n].jacobian[5]=this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=this.rows[n].jacobian[12]=0,this.rows[n].jacobian[n]=1);for(n=3;6>n;n++)this.rows[n]=t.ObjectPool.getObject("ConstraintRow"),this.rows[n].lower_limit=-(1/0),this.rows[n].upper_limit=1/0,this.rows[n].bias=0,null==this.object_b?(this.rows[n].jacobian[0]=this.rows[n].jacobian[1]=this.rows[n].jacobian[2]=this.rows[n].jacobian[4]=this.rows[n].jacobian[5]=this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=this.rows[n].jacobian[12]=0,this.rows[n].jacobian[n]=1):(this.rows[n].jacobian[0]=this.rows[n].jacobian[1]=this.rows[n].jacobian[2]=0,this.rows[n].jacobian[3]=this.rows[n].jacobian[4]=this.rows[n].jacobian[5]=0,this.rows[n].jacobian[n]=-1,this.rows[n].jacobian[6]=this.rows[n].jacobian[7]=this.rows[n].jacobian[8]=0,this.rows[n].jacobian[9]=this.rows[n].jacobian[10]=this.rows[n].jacobian[11]=0,this.rows[n].jacobian[n+6]=1)},t.WeldConstraint.prototype=Object.create(t.Constraint.prototype),t.WeldConstraint.prototype.update=function(){var o=new t.Vector3,n=new t.Vector3;return function(r){if(null!=this.object_b){this.object_a.transform.transformVector3Into(this.point_a,i),o.subtractVectors(i,this.object_a.position),this.rows[0].jacobian[0]=-1,this.rows[0].jacobian[1]=0,this.rows[0].jacobian[2]=0,this.rows[0].jacobian[3]=0,this.rows[0].jacobian[4]=-o.z,this.rows[0].jacobian[5]=o.y,this.rows[1].jacobian[0]=0,this.rows[1].jacobian[1]=-1,this.rows[1].jacobian[2]=0,this.rows[1].jacobian[3]=o.z,this.rows[1].jacobian[4]=0,this.rows[1].jacobian[5]=-o.x,this.rows[2].jacobian[0]=0,this.rows[2].jacobian[1]=0,this.rows[2].jacobian[2]=-1,this.rows[2].jacobian[3]=-o.y,this.rows[2].jacobian[4]=o.x,this.rows[2].jacobian[5]=0,null!=this.object_b?(this.object_b.transform.transformVector3Into(this.point_b,e),n.subtractVectors(e,this.object_b.position),this.rows[0].jacobian[6]=1,this.rows[0].jacobian[7]=0,this.rows[0].jacobian[8]=0,this.rows[0].jacobian[9]=0,this.rows[0].jacobian[10]=n.z,this.rows[0].jacobian[11]=-n.y,this.rows[1].jacobian[6]=0,this.rows[1].jacobian[7]=1,this.rows[1].jacobian[8]=0,this.rows[1].jacobian[9]=-n.z,this.rows[1].jacobian[10]=0,this.rows[1].jacobian[11]=n.x,this.rows[2].jacobian[6]=0,this.rows[2].jacobian[7]=0,this.rows[2].jacobian[8]=1,this.rows[2].jacobian[9]=n.y,this.rows[2].jacobian[10]=-n.x,this.rows[2].jacobian[11]=0):e.copy(this.point_b);var c=new t.Vector3;c.subtractVectors(i,e),c.scale(this.erp/r),this.rows[0].bias=c.x,this.rows[1].bias=c.y,this.rows[2].bias=c.z,s.invertQuaternion(this.object_b.rotation),s.multiply(this.object_a.rotation),a.invertQuaternion(this.rotation_difference),a.multiply(s),c.x=a.x,c.y=a.y,c.z=a.z,c.scale(this.erp/r),this.rows[3].bias=c.x,this.rows[4].bias=c.y,this.rows[5].bias=c.z}}}(),t.DragForce=function(t,i){this.drag_coefficient=t||0,this.squared_drag_coefficient=i||0,this.enabled=!0,this.affected=[]},t.DragForce.prototype.enable=t.ForceGenerator.prototype.enable,t.DragForce.prototype.disable=t.ForceGenerator.prototype.disable,t.DragForce.prototype.affect=t.ForceGenerator.prototype.affect,t.DragForce.prototype.unaffect=t.ForceGenerator.prototype.unaffect,t.DragForce.prototype.applyForce=function(){if(this.enabled){var t,e,o,s,a=i;for(t=0,e=this.affected.length;e>t;t++)o=this.affected[t],a.copy(o.linear_velocity),s=a.length(),s=this.drag_coefficient*s+this.squared_drag_coefficient*s*s,a.normalize(),a.scale(-s),o.applyForce(a)}},t.RayIntersection=function(){this.object=null,this.point=new t.Vector3,this.t=null,this.normal=new t.Vector3},t.BoxShape=function(i,e,o){this.half_width=i,this.half_height=e,this.half_depth=o,this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.BoxShape.prototype.calculateLocalAABB=function(t){t.min.x=-this.half_width,t.min.y=-this.half_height,t.min.z=-this.half_depth,t.max.x=this.half_width,t.max.y=this.half_height,t.max.z=this.half_depth},t.BoxShape.prototype.getInertiaTensor=function(i){var e=this.half_height*this.half_height*4,o=this.half_width*this.half_width*4,s=this.half_depth*this.half_depth*4,a=.0833*i;return new t.Matrix3(a*(e+s),0,0,0,a*(o+s),0,0,0,a*(e+o))},t.BoxShape.prototype.findSupportPoint=function(t,i){i.x=t.x<0?-this.half_width:this.half_width,i.y=t.y<0?-this.half_height:this.half_height,i.z=t.z<0?-this.half_depth:this.half_depth},t.BoxShape.prototype.rayIntersect=function(){var i,e,o,s,a,n,r,c=new t.Vector3;return function(h,l){i=0,c.subtractVectors(l,h),e=c.length(),c.scale(1/e);for(var p=0;3>p;p++){if(o=0===p?"x":1===p?"y":"z",r=0===p?this.half_width:1===p?this.half_height:this.half_depth,Math.abs(c[o])<t.EPSILON&&(h[o]<-r||h[o]>r))return null;if(s=1/c[o],a=(-r-h[o])*s,n=(r-h[o])*s,a>n&&(s=a,a=n,n=s),i=Math.max(i,a),e=Math.min(e,n),i>e)return null}var b=t.ObjectPool.getObject("RayIntersection");b.object=this,b.t=i,b.point.scaleVector(c,i),b.point.add(h);var _=1/0;for(p=0;3>p;p++)o=0===p?"x":1===p?"y":"z",r=0===p?this.half_width:1===p?this.half_height:this.half_depth,r-Math.abs(b.point[o])<_&&(b.normal.x=b.normal.y=b.normal.z=0,b.normal[o]=b.point[o]<0?-1:1,_=r-Math.abs(b.point[o]));return b}}(),t.CompoundShape=function(){this.child_shapes=[],this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.CompoundShape.prototype.addChildShape=function(i,e,o){this.child_shapes.push(new t.CompoundShapeChild(i,e,o)),this.calculateLocalAABB(this.aabb)},t.CompoundShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=1/0,t.max.x=t.max.y=t.max.z=-(1/0);var i,e;for(i=0;i<this.child_shapes.length;i++)e=this.child_shapes[i],t.min.x=Math.min(t.min.x,e.aabb.min.x),t.min.y=Math.min(t.min.y,e.aabb.min.y),t.min.z=Math.min(t.min.z,e.aabb.min.z),t.max.x=Math.max(t.max.x,e.aabb.max.x),t.max.y=Math.max(t.max.y,e.aabb.max.y),t.max.z=Math.max(t.max.z,e.aabb.max.z)},t.CompoundShape.prototype.getInertiaTensor=function(e){var o,s,a,c=new t.Matrix3,h=new t.Matrix3;for(e/=this.child_shapes.length,i.x=i.y=i.z=0,o=0;o<this.child_shapes.length;o++)s=this.child_shapes[o],i.subtract(s.position),h.e00=e*-(i.y*i.y+i.z*i.z),h.e10=e*i.x*i.y,h.e20=e*i.x*i.z,h.e01=e*i.x*i.y,h.e11=e*-(i.x*i.x+i.z*i.z),h.e21=e*i.y*i.z,h.e02=e*i.x*i.z,h.e12=e*i.y*i.z,h.e22=e*-(i.x*i.x+i.y*i.y),n.fromMatrix4(s.transform),a=s.shape.getInertiaTensor(e),n.transposeInto(r),n.multiply(a),n.multiply(r),c.e00+=n.e00+h.e00,c.e10+=n.e10+h.e10,c.e20+=n.e20+h.e20,c.e01+=n.e01+h.e01,c.e11+=n.e11+h.e11,c.e21+=n.e21+h.e21,c.e02+=n.e02+h.e02,c.e12+=n.e12+h.e12,c.e22+=n.e22+h.e22;return c},t.CompoundShape.prototype.rayIntersect=function(){var i=function(t,i){return t.t<i.t?-1:t.t>i.t?1:0};return function(e,o){var s,a,n,r=[],c=new t.Vector3,h=new t.Vector3;for(a=0;a<this.child_shapes.length;a++)n=this.child_shapes[a],n.transform_inverse.transformVector3Into(e,c),n.transform_inverse.transformVector3Into(o,h),s=n.shape.rayIntersect(c,h),null!=s&&(s.object=this,n.transform.transformVector3(s.point),r.push(s));return r.sort(i),r[0]||null}}(),t.CompoundShapeChild=function(i,e,o){this.shape=i,this.position=new t.Vector3(e.x,e.y,e.z),this.rotation=new t.Quaternion(o.x,o.y,o.z,o.w),this.transform=new t.Matrix4,this.transform_inverse=new t.Matrix4,this.transform.makeTransform(this.rotation,this.position),this.transform.invertInto(this.transform_inverse),this.aabb=new t.AABB,this.aabb.transform(this.shape.aabb,this.transform)},t.ConeShape=function(i,e){this.radius=i,this.half_height=e,this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb),this._sinangle=this.radius/Math.sqrt(this.radius*this.radius+Math.pow(2*this.half_height,2)),this._cosangle=Math.cos(Math.asin(this._sinangle))},t.ConeShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.z=-this.radius,t.min.y=-this.half_height,t.max.x=t.max.z=this.radius,t.max.y=this.half_height},t.ConeShape.prototype.getInertiaTensor=function(i){var e=.1*i*Math.pow(2*this.half_height,2)+.15*i*this.radius*this.radius;return new t.Matrix3(e,0,0,0,.3*i*this.radius*this.radius,0,0,0,e)},t.ConeShape.prototype.findSupportPoint=function(t,i){var e=Math.sqrt(t.x*t.x+t.z*t.z);if(t.y>t.length()*this._sinangle)i.x=i.z=0,i.y=this.half_height;else if(e>0){var o=this.radius/e;i.x=o*t.x,i.y=-this.half_height,i.z=o*t.z}else i.x=i.z=0,i.y=-this.half_height},t.ConeShape.prototype.rayIntersect=function(){var i,e=new t.Vector3,o=new t.Vector3,s=new t.Vector3,a=new t.Vector3,n=new t.Vector3;return function(r,c){e.subtractVectors(c,r),i=e.length(),e.scale(1/i);var h,l;o.x=o.y=o.z=0,h=this._rayIntersectBase(r,c,o,a),s.x=s.y=s.z=0,l=this._rayIntersectCone(r,e,i,s,n);var p;return h||l?!l||h&&l>h?(p=t.ObjectPool.getObject("RayIntersection"),p.object=this,p.t=h,p.point.copy(o),p.normal.copy(a),p):!h||l&&h>l?(p=t.ObjectPool.getObject("RayIntersection"),p.object=this,p.t=l,p.point.copy(s),p.normal.copy(n),p):null:null}}(),t.ConeShape.prototype._rayIntersectBase=function(){var i,e=new t.Vector3(0,-1,0),o=new t.Vector3,s=new t.Vector3,a=new t.Vector3;return function(t,n,r,c){return s.x=t.x,s.y=t.y+this.half_height,s.z=t.z,a.x=n.x,a.y=n.y+this.half_height,a.z=n.z,o.subtractVectors(a,s),i=-e.dot(s)/e.dot(o),0>i||i>1?null:(r.scaleVector(o,i),r.add(t),r.x*r.x+r.z*r.z>this.radius*this.radius?null:(c.x=c.z=0,c.y=-1,i*o.length()))}}(),t.ConeShape.prototype._rayIntersectCone=function(){var e=new t.Vector3;return function(o,s,a,n,r){var c=new t.Vector3(0,-1,0),h=c.dot(s),l=this._cosangle*this._cosangle,p=new t.Vector3;

	p.x=o.x,p.y=o.y-this.half_height,p.z=o.z;var b,_,u=c.dot(p),f=s.dot(p),d=p.dot(p),m=h*h-l,y=h*u-l*f,j=u*u-l*d,x=null;if(Math.abs(m)>=t.EPSILON){var w=y*y-j*m;if(w<-t.EPSILON)return null;if(w>t.EPSILON){var v=Math.sqrt(w),g=1/m;if(_=(-y-v)*g,_>=0&&a>=_&&(e.scaleVector(s,_),e.add(o),p.y=e.y-this.half_height,b=p.dot(c),b>=0&&(x=_,n.copy(e))),_=(-y+v)*g,_>=0&&a>=_&&(null==x||x>_)&&(e.scaleVector(s,_),e.add(o),p.y=e.y-this.half_height,b=p.dot(c),b>=0&&(x=_,n.copy(e))),null==x)return null;x/=a}else{if(_=-y/m,e.scaleVector(s,_),e.add(o),p.y=e.y-this.half_height,b=p.dot(c),0>b)return null;if(i.subtractVectors(e,o),i.lengthSquared()>a*a)return null;x=_/a,n.copy(e)}}else{if(!(Math.abs(y)>=t.EPSILON))return null;if(_=.5*j/y,e.scaleVector(s,_),e.add(o),p.y=e.y-this.half_height,b=p.dot(c),0>b)return null;x=_,n.copy(e)}return n.y<-this.half_height?null:(r.x=n.x,r.y=0,r.z=n.z,r.normalize(),r.x*=2*this.half_height/this.radius,r.y=this.radius/(2*this.half_height),r.z*=2*this.half_height/this.radius,r.normalize(),x*a)}}(),t.ConvexShape=function(i){this.vertices=[],this.faces=[],this.volume=0,this.center_of_mass=new t.Vector3,this._integral=new Float32Array(10),this.process(i),this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.ConvexShape.prototype.process=function(o){for(var s=o.slice(),a=null,n=null,r=0;r<s.length;r++){var c=s[r];(null==a||a.x>c.x)&&(a=c),(null==n||n.x>c.x)&&(n=c)}a===n&&(n=o[0]===a?o[1]:o[0]);var h=a,l=n;s.splice(s.indexOf(h),1),s.splice(s.indexOf(l),1);var p,b,_=-(1/0),u=null;for(r=0;r<s.length;r++)p=s[r],b=t.GeometryMethods.findSquaredDistanceFromSegment(p,h,l),b>_&&(_=b,u=r);var f=s[u];for(s.splice(u,1),i.subtractVectors(l,h),e.subtractVectors(f,h),i.cross(e),_=-(1/0),u=null,r=0;r<s.length;r++)p=s[r],b=Math.abs(i.dot(p)),b>_&&(_=b,u=r);var d=s[u];if(s.splice(u,1),i.dot(d)>0){var m=h;h=f,f=m}var y=new t.GjkEpa.Polyhedron({points:[{point:f},{point:l},{point:h},{point:d}]});for(r=0;r<s.length;r++){y.closest_face=null;for(var j=0;j<y.faces.length;j++)if(y.faces[j].active===!0&&y.faces[j].classifyVertex({point:s[r]})>0){y.closest_face=j;break}null!=y.closest_face&&y.addVertex({point:s[r]})}this.faces=y.faces.filter(function(t){return t.active});var x=this;this.faces.forEach(function(t){var i=t.a.point,e=t.b.point,o=t.c.point,s=x.vertices.indexOf(i),a=x.vertices.indexOf(e),n=x.vertices.indexOf(o);-1===s&&x.vertices.push(i),-1===a&&x.vertices.push(e),-1===n&&x.vertices.push(o)}),this.computeVolume(this.faces)},t.ConvexShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=0,t.max.x=t.max.y=t.max.z=0;for(var i=0;i<this.vertices.length;i++)t.min.x=Math.min(t.min.x,this.vertices[i].x),t.min.y=Math.min(t.min.y,this.vertices[i].y),t.min.z=Math.min(t.min.z,this.vertices[i].z),t.max.x=Math.max(t.max.x,this.vertices[i].x),t.max.y=Math.max(t.max.y,this.vertices[i].y),t.max.z=Math.max(t.max.z,this.vertices[i].z)},t.ConvexShape.prototype.computeVolume=function(){var i={point:new t.Vector3},e=new Float32Array(6),o=function(t,i,o){var s=t+i,a=t*t,n=a+i*s;e[0]=s+o,e[1]=n+o*e[0],e[2]=t*a+i*n+o*e[1],e[3]=e[1]+t*(e[0]+t),e[4]=e[1]+i*(e[0]+i),e[5]=e[1]+o*(e[0]+o)};return function(t){for(var s=0;s<t.length;s++){var a=t[s],n=a.a.point,r=a.b.point,c=a.c.point,h=r.x-n.x,l=r.y-n.y,p=r.z-n.z,b=c.x-n.x,_=c.y-n.y,u=c.z-n.z,f=l*u-_*p,d=b*p-h*u,m=h*_-b*l;o(n.x,r.x,c.x);var y=e[0],j=e[1],x=e[2],w=e[3],v=e[4],g=e[5];o(n.y,r.y,c.y);var V=(e[0],e[1]),z=e[2],B=e[3],S=e[4],C=e[5];o(n.z,r.z,c.z);var P=(e[0],e[1]),M=e[2],O=e[3],I=e[4],A=e[5],T=a.classifyVertex(i)>0?-1:1;this._integral[0]+=T*f*y,this._integral[1]+=T*f*j,this._integral[2]+=T*d*V,this._integral[3]+=T*m*P,this._integral[4]+=T*f*x,this._integral[5]+=T*d*z,this._integral[6]+=T*m*M,this._integral[7]+=T*f*(n.y*w+r.y*v+c.y*g),this._integral[8]+=T*d*(n.z*B+r.z*S+c.z*C),this._integral[9]+=T*m*(n.x*O+r.x*I+c.x*A)}this._integral[0]*=1/6,this._integral[1]*=1/24,this._integral[2]*=1/24,this._integral[3]*=1/24,this._integral[4]*=1/60,this._integral[5]*=1/60,this._integral[6]*=1/60,this._integral[7]*=1/120,this._integral[8]*=1/120,this._integral[9]*=1/120,this.volume=this._integral[0],this.center_of_mass.x=this._integral[1]/this.volume,this.center_of_mass.y=this._integral[2]/this.volume,this.center_of_mass.z=this._integral[3]/this.volume}}(),t.ConvexShape.prototype.getInertiaTensor=function(){return function(i){var e=new t.Matrix3;return i/=this.volume,e.e00=(this._integral[5]+this._integral[6])*i,e.e11=(this._integral[4]+this._integral[6])*i,e.e22=(this._integral[4]+this._integral[5])*i,e.e10=e.e01=-this._integral[7]*i,e.e21=e.e12=-this._integral[8]*i,e.e20=e.e02=-this._integral[9]*i,e.e00-=i*(this.center_of_mass.y*this.center_of_mass.y+this.center_of_mass.z*this.center_of_mass.z),e.e11-=i*(this.center_of_mass.x*this.center_of_mass.x+this.center_of_mass.z*this.center_of_mass.z),e.e22-=i*(this.center_of_mass.x*this.center_of_mass.x+this.center_of_mass.y*this.center_of_mass.y),e.e10+=i*this.center_of_mass.x*this.center_of_mass.y,e.e01+=i*this.center_of_mass.x*this.center_of_mass.y,e.e21+=i*this.center_of_mass.y*this.center_of_mass.z,e.e12+=i*this.center_of_mass.y*this.center_of_mass.z,e.e20+=i*this.center_of_mass.x*this.center_of_mass.z,e.e02+=i*this.center_of_mass.x*this.center_of_mass.z,e}}(),t.ConvexShape.prototype.findSupportPoint=function(t,i){for(var e,o,s=-(1/0),a=0;a<this.vertices.length;a++)o=this.vertices[a].dot(t),o>s&&(s=o,e=a);i.copy(this.vertices[e])},t.ConvexShape.prototype.rayIntersect=function(){{var i,e,o=new t.Vector3,s=new t.Vector3,a=new t.Vector3,n=new t.Vector3,r=new t.Vector3,c=new t.Vector3;new t.Vector3,new t.Vector3}return function(h,l){i=0,o.subtractVectors(l,h),e=o.length(),o.scale(1/e);for(var p=0;p<this.faces.length;p++){var b=this.faces[p];s.subtractVectors(b.b.point,b.a.point),a.subtractVectors(b.c.point,b.a.point),n.crossVectors(o,a);var _=s.dot(n);if(!(_<t.EPSILON)){var u=1/_;r.subtractVectors(h,b.a.point);var f=u*r.dot(n);if(!(0>f)){c.crossVectors(r,s);var d=u*o.dot(c);if(!(0>d||f+d>1)){var m=u*a.dot(c);if(!(i>m||m>e)){var y=t.ObjectPool.getObject("RayIntersection");return y.object=this,y.t=m,y.point.scaleVector(o,m),y.point.add(h),y.normal.copy(b.normal),y}}}}}return null}}(),t.CylinderShape=function(i,e){this.radius=i,this.half_height=e,this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.CylinderShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.z=-this.radius,t.min.y=-this.half_height,t.max.x=t.max.z=this.radius,t.max.y=this.half_height},t.CylinderShape.prototype.getInertiaTensor=function(i){var e=.0833*i*(3*this.radius*this.radius+(this.half_height+this.half_height)*(this.half_height+this.half_height));return new t.Matrix3(e,0,0,0,.5*i*this.radius*this.radius,0,0,0,e)},t.CylinderShape.prototype.findSupportPoint=function(t,i){if(i.y=t.y<0?-this.half_height:this.half_height,0===t.x&&0===t.z)i.x=i.z=0;else{var e=Math.sqrt(t.x*t.x+t.z*t.z),o=this.radius/e;i.x=o*t.x,i.z=o*t.z}},t.CylinderShape.prototype.rayIntersect=function(){var i=new t.Vector3,e=new t.Vector3;return function(o,s){i.y=this.half_height,e.y=-this.half_height;var a=new t.Vector3;a.subtractVectors(e,i);var n=new t.Vector3;n.subtractVectors(o,i);var r=new t.Vector3;r.subtractVectors(s,o);var c=n.dot(a),h=r.dot(a),l=a.dot(a);if(0>c&&0>c+h)return null;if(c>l&&c+h>l)return null;var p,b,_=r.dot(r),u=n.dot(r),f=l*_-h*h,d=n.dot(n)-this.radius*this.radius,m=l*d-c*c;if(Math.abs(f)<t.EPSILON){if(m>0)return null;p=0>c?-u/_:c>l?(h-u)/_:0}else{var y=l*u-h*c,j=y*y-f*m;if(0>j)return null;if(b=p=(-y-Math.sqrt(j))/f,0>c+p*h){if(0>=h)return null;if(p=-c/h,!(0>=d+p*(2*u+p*_)))return null;b=p}else if(c+p*h>l){if(h>=0)return null;if(p=(l-c)/h,!(0>=d+l-2*c+p*(2*(u-h)+p*_)))return null;b=p}if(p=b,0>p||p>1)return null}var x=t.ObjectPool.getObject("RayIntersection");return x.object=this,x.t=p*r.length(),x.point.scaleVector(r,p),x.point.add(o),Math.abs(x.point.y-this.half_height)<=t.EPSILON?(x.normal.x=x.normal.z=0,x.normal.y=x.point.y<0?-1:1):(x.normal.y=0,x.normal.x=x.point.x,x.normal.z=x.point.z,x.normal.scale(1/this.radius)),x}}(),t.MeshShape=function(i,e){this.vertices=i,this.triangles=[];for(var o=0;o<e.length;o+=3)this.triangles.push(new t.TriangleShape(i[e[o]],i[e[o+1]],i[e[o+2]]));this.volume=0,this.center_of_mass=new t.Vector3,this._integral=new Float32Array(10),this.hierarchy=new t.BVH(this.triangles).tree;var s=this.triangles.map(function(i){return new t.GjkEpa.Face(null,{point:i.a},{point:i.b},{point:i.c})});t.ConvexShape.prototype.computeVolume.call(this,s),this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.MeshShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=0,t.max.x=t.max.y=t.max.z=0;for(var i=0;i<this.vertices.length;i++)t.min.x=Math.min(t.min.x,this.vertices[i].x),t.min.y=Math.min(t.min.y,this.vertices[i].y),t.min.z=Math.min(t.min.z,this.vertices[i].z),t.max.x=Math.max(t.max.x,this.vertices[i].x),t.max.y=Math.max(t.max.y,this.vertices[i].y),t.max.z=Math.max(t.max.z,this.vertices[i].z)},t.MeshShape.prototype.getInertiaTensor=function(i){return t.ConvexShape.prototype.getInertiaTensor.call(this,i)},t.MeshShape.prototype.findSupportPoint=function(t,i){},t.MeshShape.prototype.rayIntersect=function(){var t=[],i=function(t,i){return t.t<i.t?-1:t.t>i.t?1:0};return function(e,o){var s,a=[this.hierarchy];t.length=0;for(var n=0;a.length>0;)if(n++,s=a.shift(),s.aabb.testRayIntersect(e,o))if(s.isLeaf()){var r=s.object.rayIntersect(e,o);null!=r&&t.push(r)}else a.push(s.left,s.right);return t.sort(i),t[0]||null}}(),t.PlaneShape=function(i,e,o){this.orientation=i,this.half_width=e,this.half_length=o,this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb),0===this.orientation?(this._half_width=0,this._half_height=this.half_width,this._half_depth=this.half_length):1===this.orientation?(this._half_width=this.half_width,this._half_height=0,this._half_depth=this.half_length):(this._half_width=this.half_width,this._half_height=this.half_length,this._half_depth=0)},t.PlaneShape.prototype.calculateLocalAABB=function(t){0===this.orientation?(this._half_width=0,this._half_height=this.half_width,this._half_depth=this.half_length,t.min.x=0,t.min.y=-this.half_width,t.min.z=-this.half_length,t.max.x=0,t.max.y=this.half_width,t.max.z=this.half_length):1===this.orientation?(this._half_width=this.half_width,this._half_height=0,this._half_depth=this.half_length,t.min.x=-this.half_width,t.min.y=0,t.min.z=-this.half_length,t.max.x=this.half_width,t.max.y=0,t.max.z=this.half_length):(this._half_width=this.half_width,this._half_height=this.half_length,this._half_depth=0,t.min.x=-this.half_width,t.min.y=-this.half_length,t.min.z=0,t.max.x=this.half_width,t.max.y=this.half_length,t.max.z=0)},t.PlaneShape.prototype.getInertiaTensor=function(i){var e=this.half_width*this.half_width*4,o=this.half_length*this.half_length*4,s=.0833*i,a=s*o,n=s*(e+o),r=s*e;return 0===this.orientation?new t.Matrix3(n,0,0,0,a,0,0,0,r):1===this.orientation?new t.Matrix3(a,0,0,0,n,0,0,0,r):new t.Matrix3(n,0,0,0,r,0,0,0,a)},t.PlaneShape.prototype.findSupportPoint=function(t,i){i.x=t.x<0?-this._half_width:this._half_width,i.y=t.y<0?-this._half_height:this._half_height,i.z=t.z<0?-this._half_depth:this._half_depth},t.PlaneShape.prototype.rayIntersect=function(){var i,e=new t.Vector3,o=new t.Vector3,s=new t.Vector3;return function(a,n){if(0===this.orientation?(e.x=1,e.y=e.z=0):1===this.orientation?(e.y=1,e.x=e.z=0):(e.z=1,e.x=e.y=0),o.subtractVectors(n,a),i=-e.dot(a)/e.dot(o),0>i||i>1)return null;if(s.scaleVector(o,i),s.add(a),s.x<-this._half_width||s.x>this._half_width)return null;if(s.y<-this._half_height||s.y>this._half_height)return null;if(s.z<-this._half_depth||s.z>this._half_depth)return null;var r=t.ObjectPool.getObject("RayIntersection");return r.object=this,r.t=i*o.length(),r.point.copy(s),r.normal.copy(e),r}}(),t.SphereShape=function(i){this.radius=i,this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.SphereShape.prototype.calculateLocalAABB=function(t){t.min.x=t.min.y=t.min.z=-this.radius,t.max.x=t.max.y=t.max.z=this.radius},t.SphereShape.prototype.getInertiaTensor=function(i){var e=.4*i*this.radius*this.radius;return new t.Matrix3(e,0,0,0,e,0,0,0,e)},t.SphereShape.prototype.findSupportPoint=function(){var i=new t.Vector3;return function(t,e){i.normalizeVector(t),e.scaleVector(i,this.radius)}}(),t.SphereShape.prototype.rayIntersect=function(){var i,e=new t.Vector3;return function(o,s){e.subtractVectors(s,o),i=e.length(),e.scale(1/i);var a=o.dot(e),n=o.dot(o)-this.radius*this.radius;if(a>=0&&n>=0)return null;var r=a*a-n;if(0>r)return null;var c=Math.sqrt(r),h=-a-c;if(0>h&&(h=-a+c),h>i)return null;var l=t.ObjectPool.getObject("RayIntersection");return l.object=this,l.point.scaleVector(e,h),l.t=h,l.point.add(o),l.normal.normalizeVector(l.point),l}}(),t.TriangleShape=function(o,s,a){this.a=o,this.b=s,this.c=a,this.normal=new t.Vector3,i.subtractVectors(this.b,this.a),e.subtractVectors(this.c,this.a),this.normal.crossVectors(i,e),this.volume=this.normal.length()/2,this.normal.normalize(),this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.TriangleShape.prototype.calculateLocalAABB=function(t){t.min.x=Math.min(this.a.x,this.b.x,this.c.x),t.min.y=Math.min(this.a.y,this.b.y,this.c.y),t.min.z=Math.min(this.a.z,this.b.z,this.c.z),t.max.x=Math.max(this.a.x,this.b.x,this.c.x),t.max.y=Math.max(this.a.y,this.b.y,this.c.y),t.max.z=Math.max(this.a.z,this.b.z,this.c.z)},t.TriangleShape.prototype.getInertiaTensor=function(i){return new t.Matrix3(0,0,0,0,0,0,0,0,0)},t.TriangleShape.prototype.classifyVertex=function(t){var i=this.normal.dot(this.a);return this.normal.dot(t)-i},t.TriangleShape.prototype.findSupportPoint=function(t,i){var e,o=-(1/0);e=t.dot(this.a),e>o&&(i.copy(this.a),o=e),e=t.dot(this.b),e>o&&(i.copy(this.b),o=e),e=t.dot(this.c),e>o&&i.copy(this.c)},t.TriangleShape.prototype.rayIntersect=function(){var i=new t.Vector3,e=new t.Vector3,o=new t.Vector3,s=new t.Vector3,a=new t.Vector3,n=new t.Vector3;return function(r,c){i.subtractVectors(this.b,this.a),e.subtractVectors(this.c,this.a),o.crossVectors(i,e),s.subtractVectors(c,r);var h=-s.dot(o);if(0>=h)return null;a.subtractVectors(r,this.a);var l=a.dot(o)/h;if(0>l||l>1)return null;n.crossVectors(a,s);var p=e.dot(n)/h,b=-i.dot(n)/h;if(p+b>1||0>p||0>b)return null;var _=t.ObjectPool.getObject("RayIntersection");return _.object=this,_.t=l*s.length(),_.point.scaleVector(s,l),_.point.add(r),_.normal.copy(this.normal),_}}(),t.CollisionUtils={},t.CollisionUtils.canBodiesCollide=function(t,i){if(t._mass===1/0&&i._mass===1/0)return!1;if(0!==t.collision_mask)if(0===(1&t.collision_mask)){if(0!==(t.collision_mask&i.collision_groups))return!1}else if(0===(t.collision_mask&i.collision_groups))return!1;if(0!==i.collision_mask)if(0===(1&i.collision_mask)){if(0!==(i.collision_mask&t.collision_groups))return!1}else if(0===(i.collision_mask&t.collision_groups))return!1;return!0},t.GeometryMethods={findClosestPointInTriangle:function(){var i=new t.Vector3,e=new t.Vector3,o=new t.Vector3;return function(t,s,a,n,r){var c;i.subtractVectors(a,s),e.subtractVectors(n,s),o.subtractVectors(t,s);var h=i.dot(o),l=e.dot(o);if(0>=h&&0>=l)return void r.copy(s);o.subtractVectors(t,a);var p=i.dot(o),b=e.dot(o);if(p>=0&&p>=b)return void r.copy(a);var _=h*b-p*l;if(0>=_&&h>=0&&0>=p)return c=h/(h-p),r.scaleVector(i,c),void r.add(s);o.subtractVectors(t,n);var u=i.dot(o),f=e.dot(o);if(f>=0&&f>=u)return void r.copy(n);var d,m=u*l-h*f;if(0>=m&&l>=0&&0>=f)return d=l/(l-f),r.scaleVector(e,d),void r.add(s);var y=p*f-u*b;if(0>=y&&b-p>=0&&u-f>=0)return d=(b-p)/(b-p+(u-f)),r.subtractVectors(n,a),r.scale(d),void r.add(a);var j=1/(y+m+_);c=m*j,d=_*j,i.scale(c),i.add(s),e.scale(d),r.addVectors(i,e)}}(),findBarycentricCoordinates:function(i,e,o,s,a){var n=new t.Vector3,r=new t.Vector3,c=new t.Vector3;n.subtractVectors(o,e),r.subtractVectors(s,e),c.subtractVectors(i,e);var h=n.dot(n),l=n.dot(r),p=r.dot(r),b=c.dot(n),_=c.dot(r),u=h*p-l*l;a.y=(p*b-l*_)/u,a.z=(h*_-l*b)/u,a.x=1-a.y-a.z},findSquaredDistanceFromSegment:function(){var i=new t.Vector3,e=new t.Vector3,o=new t.Vector3;return function(t,s,a){i.subtractVectors(s,a),e.subtractVectors(s,t),o.subtractVectors(a,t);var n=e.dot(i);if(0>=n)return e.dot(e);var r=i.dot(i);return n>=r?o.dot(o):e.dot(e)-n*n/r}}(),findClosestPointsOnSegments:function(){var e=new t.Vector3,o=new t.Vector3,s=new t.Vector3,a=function(t,i,e){return Math.min(Math.max(t,i),e)};return function(n,r,c,h,l,p){e.subtractVectors(r,n),o.subtractVectors(h,c),s.subtractVectors(n,c);var b,_,u=e.dot(e),f=o.dot(o),d=o.dot(s);if(u<=t.EPSILON&&f<=t.EPSILON)return b=_=0,l.copy(n),p.copy(c),i.subtractVectors(l,p),i.dot(i);if(u<=t.EPSILON)b=0,_=d/f,_=a(_,0,1);else{var m=e.dot(s);if(f<=t.EPSILON)_=0,b=a(-m/u,0,1);else{var y=e.dot(o),j=u*f-y*y;b=0!==j?a((y*d-m*f)/j,0,1):0,_=(y*b+d)/f,0>_?(_=0,b=a(-m/u,0,1)):_>1&&(_=1,b=a((y-m)/u,0,1))}}return l.scaleVector(e,b),l.add(n),p.scaleVector(o,_),p.add(c),i.subtractVectors(l,p),i.dot(i)}}()},function(){t.MinHeap=function(t){this.heap=null==t?[]:t.slice(),this.heap.length>0&&this.heapify()},t.MinHeap.prototype={heapify:function(){for(var t=~~((this.heap.length-2)/2);t>=0;)this.siftUp(t,this.heap.length-1),t--},siftUp:function(t,i){for(var e=t;i>=2*e+1;){var o=2*e+1;if(i>=o+1&&this.heap[o+1].valueOf()<this.heap[o].valueOf()&&o++,!(this.heap[o].valueOf()<this.heap[e].valueOf()))return;var s=this.heap[o];this.heap[o]=this.heap[e],this.heap[e]=s,e=o}},push:function(t){this.heap.push(t);for(var i=this.heap.length-1;0!==i;){var e=~~((i-1)/2);if(this.heap[e].valueOf()>this.heap[i].valueOf()){var o=this.heap[e];this.heap[e]=this.heap[i],this.heap[i]=o}i=e}},peek:function(){return this.heap.length>0?this.heap[0]:null},pop:function(){var t=this.heap[0];return this.heap[0]=this.heap[this.heap.length-1],this.heap.length=this.heap.length-1,this.siftUp(0,this.heap.length-1),t}}}(),t.Utility={getUid:function(){var t=0;return function(){return t++}}()},t.LineSweptShape=function(i,e,o){this.start=i,this.end=e,this.shape=o,this.direction=new t.Vector3,this.direction.subtractVectors(e,i),this.length=this.direction.length(),this.direction.normalize(),this.aabb=new t.AABB,this.calculateLocalAABB(this.aabb)},t.LineSweptShape.prototype.calculateLocalAABB=function(t){this.shape.calculateLocalAABB(t),t.min.x=Math.min(t.min.x+this.start.x,t.min.x+this.end.x),t.min.y=Math.min(t.min.y+this.start.y,t.min.y+this.end.y),t.min.z=Math.min(t.min.z+this.start.z,t.min.z+this.end.z),t.max.x=Math.max(t.max.x+this.start.x,t.max.x+this.end.x),t.max.y=Math.max(t.max.y+this.start.y,t.max.y+this.end.y),t.max.z=Math.max(t.max.z+this.start.z,t.max.z+this.end.z)},t.LineSweptShape.prototype.getInertiaTensor=function(t){return this.shape.getInertiaTensor(t)},t.LineSweptShape.prototype.findSupportPoint=function(t,i){this.shape.findSupportPoint(t,i);var e=this.direction.dot(t);i.add(0>e?this.start:this.end)},t.LineSweptShape.prototype.rayIntersect=function(){return null},t.AABB=function(i,e){this.min=i||new t.Vector3,this.max=e||new t.Vector3},t.AABB.prototype.copy=function(t){this.min.x=t.min.x,this.min.y=t.min.y,this.min.z=t.min.z,this.max.x=t.max.x,this.max.y=t.max.y,this.max.z=t.max.z},t.AABB.prototype.combineAABBs=function(t,i){this.min.x=Math.min(t.min.x,i.min.x),this.min.y=Math.min(t.min.y,i.min.y),this.min.z=Math.min(t.min.z,i.min.z),this.max.x=Math.max(t.max.x,i.max.x),this.max.y=Math.max(t.max.y,i.max.y),this.max.z=Math.max(t.max.z,i.max.z)},t.AABB.prototype.transform=function(){var e=new t.Vector3,o=new t.Vector3,s=new t.Vector3,a=new t.Vector3,n=new t.Matrix3;return function(t,r){e.subtractVectors(t.max,t.min),e.scale(.5),o.addVectors(t.max,t.min),o.scale(.5),r.transformVector3Into(o,s),n.e00=Math.abs(r.e00),n.e01=Math.abs(r.e01),n.e02=Math.abs(r.e02),n.e10=Math.abs(r.e10),n.e11=Math.abs(r.e11),n.e12=Math.abs(r.e12),n.e20=Math.abs(r.e20),n.e21=Math.abs(r.e21),n.e22=Math.abs(r.e22),i.x=n.e00,i.y=n.e10,i.z=n.e20,a.x=e.dot(i),i.x=n.e01,i.y=n.e11,i.z=n.e21,a.y=e.dot(i),i.x=n.e02,i.y=n.e12,i.z=n.e22,a.z=e.dot(i),this.min.subtractVectors(s,a),this.max.addVectors(s,a)}}(),t.AABB.prototype.intersects=function(t){return this.max.x<t.min.x||this.max.y<t.min.y||this.max.z<t.min.z||this.min.x>t.max.x||this.min.y>t.max.y||this.min.z>t.max.z?!1:!0},t.AABB.prototype.testRayIntersect=function(){var i,e,o,s,a,n=new t.Vector3;return function(r,c){i=0,n.subtractVectors(c,r),e=n.length(),n.scale(1/e);var h,l;if(h=this.min.x,l=this.max.x,Math.abs(n.x)<t.EPSILON){if(r.x<h||r.x>l)return!1}else if(o=1/n.x,s=(h-r.x)*o,a=(l-r.x)*o,s>a&&(o=s,s=a,a=o),i=Math.max(i,s),e=Math.min(e,a),i>e)return!1;if(h=this.min.y,l=this.max.y,Math.abs(n.y)<t.EPSILON){if(r.y<h||r.y>l)return!1}else if(o=1/n.y,s=(h-r.y)*o,a=(l-r.y)*o,s>a&&(o=s,s=a,a=o),i=Math.max(i,s),e=Math.min(e,a),i>e)return!1;if(h=this.min.z,l=this.max.z,Math.abs(n.z)<t.EPSILON){if(r.z<h||r.z>l)return!1}else if(o=1/n.z,s=(h-r.z)*o,a=(l-r.z)*o,s>a&&(o=s,s=a,a=o),i=Math.max(i,s),e=Math.min(e,a),i>e)return!1;return!0}}(),function(){function i(t){var i=t.max.x-t.min.x,e=t.max.y-t.min.y,o=t.max.z-t.min.z;return i*(e+o)+e*o}var e=function(){function e(t){return t=4278190335&(t^t<<16),t=50393103&(t^t<<8),t=51130563&(t^t<<4),t=153391689&(t^t<<2)}function s(t,i,o){return(e(o)<<2)+(e(i)<<1)+e(t)}var a=new t.AABB,n=function(t,i){for(var e=t.max.x-t.min.x,o=t.max.y-t.min.y,a=t.max.z-t.min.z,r=512,c=r/e,h=r/o,l=r/a,p=0;p<i.length;p++){var b=i[p],_=(b.aabb.max.x-b.aabb.min.x)/2+b.aabb.min.x,u=(b.aabb.max.y-b.aabb.min.y)/2+b.aabb.min.y,f=(b.aabb.max.z-b.aabb.min.z)/2+b.aabb.min.z;b.morton=s((_+t.min.x)*c,(u+t.min.y)*h,(f+t.min.z)*l)}i.sort(n.mortonSort);var d=n.buildTree(i,29);return n.combineCluster(d,1),d};return n.mortonSort=function(t,i){return t.morton<i.morton?-1:t.morton>i.morton?1:0},n.clusterReductionCount=function(t){var i=Math.pow(t,.5)/2,e=.5;return Math.max(i*Math.pow(t,e),1)},n.buildTree=function(t,i){var e=[];if(t.length<n.max_bucket_size)e.push.apply(e,t),n.combineCluster(e,n.clusterReductionCount(n.max_bucket_size));else{var o=[],s=[];if(1>i)o=t.slice(0,t.length/2),s=t.slice(t.length/2);else for(var a=1<<i,r=0;r<t.length;r++){var c=t[r];c.morton&a?s.push(c):o.push(c)}e.push.apply(e,n.buildTree(o,i-1)),e.push.apply(e,n.buildTree(s,i-1)),n.combineCluster(e,n.clusterReductionCount(e.length))}return e},n.combineCluster=function(i,e){if(i.length<=1)return i;for(var s,a=new t.MinHeap,r=0;r<i.length;r++)s=new o,s.left=i[r],s.right=n.findBestMatch(i,i[r]),s.computeBounds(),a.push(s);for(var c;i.length>e;)for(c=a.pop(),i.splice(i.indexOf(c.left),1),i.splice(i.indexOf(c.right),1),i.push(c),a.heap.length=0,r=0;r<i.length;r++)s=new o,s.left=i[r],s.right=n.findBestMatch(i,i[r]),s.computeBounds(),a.push(s)},n.findBestMatch=function(t,e){for(var o,s=1/0,n=0,r=0;r<t.length;r++)t[r]!==e&&(a.combineAABBs(e.aabb,t[r].aabb),o=i(a),s>o&&(s=o,n=r));return t[n]},n.max_bucket_size=20,n}(),o=function(i){this.aabb=new t.AABB,this.area=0,this.parent=null,this.left=null,this.right=null,this.morton=null,this.object=i||null};o.prototype={isLeaf:function(){return null!=this.object},computeBounds:function(t){this.isLeaf()?this.aabb.copy(this.object.aabb):this.aabb.combineAABBs(this.left.aabb,this.right.aabb),this.area=i(this.aabb)},valueOf:function(){return this.area}},t.BVH=function(i){for(var s=[],a=new t.AABB,n=0;n<i.length;n++){a.combineAABBs(a,i[n].aabb);var r=new o(i[n]);r.computeBounds(),s.push(r)}this.tree=e(a,s)[0]},t.BVH.AAC=e}(),t.ContactDetails=function(){this.uid=t.Utility.getUid(),this.object_a=null,this.object_b=null,this.contact_point=new t.Vector3,this.contact_point_in_a=new t.Vector3,this.contact_point_in_b=new t.Vector3,this.contact_normal=new t.Vector3,this.penetration_depth=0,this.restitution=0,this.friction=0,this.listeners={}},t.EventEmitter.apply(t.ContactDetails),t.ContactDetails.prototype.destroy=function(){this.emit("destroy"),t.ObjectPool.freeObject("ContactDetails",this)},t.ContactManifold=function(){this.object_a=null,this.object_b=null,this.points=[],this.next_manifold=null},t.ContactManifold.prototype.findWeakestContact=function(t){var o,s,a=-1,n=t.penetration_depth;for(o=0;4>o;o++)s=this.points[o],s.penetration_depth>n&&(n=s.penetration_depth,a=o);var r=0,c=0,h=0,l=0;0!==a&&(i.subtractVectors(t.contact_point_in_a,this.points[1].contact_point_in_a),e.subtractVectors(this.points[3].contact_point_in_a,this.points[2].contact_point_in_a),i.cross(e),r=i.lengthSquared()),1!==a&&(i.subtractVectors(t.contact_point_in_a,this.points[0].contact_point_in_a),e.subtractVectors(this.points[3].contact_point_in_a,this.points[2].contact_point_in_a),i.cross(e),c=i.lengthSquared()),2!==a&&(i.subtractVectors(t.contact_point_in_a,this.points[0].contact_point_in_a),e.subtractVectors(this.points[3].contact_point_in_a,this.points[1].contact_point_in_a),i.cross(e),h=i.lengthSquared()),3!==a&&(i.subtractVectors(t.contact_point_in_a,this.points[0].contact_point_in_a),e.subtractVectors(this.points[2].contact_point_in_a,this.points[1].contact_point_in_a),i.cross(e),l=i.lengthSquared());var p=0,b=r;return c>b&&(p=1,b=c),h>b&&(p=2,b=h),l>b&&(p=3),p},t.ContactManifold.prototype.addContact=function(t){var i;for(i=0;i<this.points.length;i++)if(this.points[i].contact_point.distanceTo(t.contact_point)<=.02)return void t.destroy();var e=!1;if(null!=t){if(e=t.object_a.emit("speculativeContact",t.object_b,t),e!==!1&&(e=t.object_b.emit("speculativeContact",t.object_a,t)),e===!1)return void t.destroy();t.object_a.emit("contact",t.object_b,t),t.object_b.emit("contact",t.object_a,t)}if(this.points.length<4)this.points.push(t);else{var o=this.findWeakestContact(t);this.points[o].destroy(),this.points[o]=t}},t.ContactManifold.prototype.update=function(){var e,o,s,a=new t.Vector3,n=new t.Vector3,r=new t.Vector3;for(e=0;e<this.points.length;e++)if(s=this.points[e],s.object_a.transform.transformVector3Into(s.contact_point_in_a,a),s.object_b.transform.transformVector3Into(s.contact_point_in_b,n),s.contact_point.addVectors(a,n),s.contact_point.scale(.5),r.subtractVectors(a,n),s.penetration_depth=r.dot(s.contact_normal),s.penetration_depth<-.02){for(s.destroy(),o=e;o<this.points.length;o++)this.points[o]=this.points[o+1];this.points.length=this.points.length-1,this.object_a.emit("endContact",this.object_b),this.object_b.emit("endContact",this.object_a)}else{i.scaleVector(s.contact_normal,s.penetration_depth),i.subtractVectors(a,i),i.subtractVectors(n,i);var c=i.lengthSquared();if(c>.2*.2){for(s.destroy(),o=e;o<this.points.length;o++)this.points[o]=this.points[o+1];this.points.length=this.points.length-1,this.object_a.emit("endContact",this.object_b),this.object_b.emit("endContact",this.object_a)}}},t.ContactManifoldList=function(){this.first=null},t.ContactManifoldList.prototype.insert=function(t){t.next_manifold=this.first,this.first=t},t.ContactManifoldList.prototype.getManifoldForObjects=function(i,e){var o=null;if(null!==this.first)for(var s=this.first;null!==s;){if(s.object_a===i&&s.object_b===e||s.object_a===e&&s.object_b===i){o=s;break}s=s.next_manifold}return null===o&&(o=t.ObjectPool.getObject("ContactManifold"),o.object_a=i,o.object_b=e,this.insert(o)),o},t.GhostBody=function(i){t.RigidBody.call(this,i,1/0),this.contacts=[],this.tick_contacts=[],this.addListener("speculativeContact",t.GhostBody.prototype.onSpeculativeContact)},t.GhostBody.prototype=Object.create(t.RigidBody.prototype),t.GhostBody.prototype.onSpeculativeContact=function(t,i){return this.tick_contacts.push(t),-1===this.contacts.indexOf(t)?(this.contacts.push(t),this.emit("contactStart",t,i)):this.emit("contactContinue",t,i),!1},t.GhostBody.prototype.checkForEndedContacts=function(){for(var t=0;t<this.contacts.length;t++)-1===this.tick_contacts.indexOf(this.contacts[t])&&(this.emit("contactEnd",this.contacts[t]),this.contacts.splice(t,1),t-=1);this.tick_contacts.length=0},t.IterativeSolver=function(){this.existing_contact_ids={},this.contact_constraints=[],this.friction_constraints=[],this.all_constraints=[],this.constraints=[],this.max_iterations=10,this.penetrations_max_iterations=5,this.relaxation=.9,this.sor_weight=.85,this.warmstarting_factor=.95;var t=this;this.onContactDeactivate=function(){this.removeListener("deactivate",t.onContactDeactivate);var i=t.contact_constraints.indexOf(this);t.contact_constraints.splice(i,1),delete t.existing_contact_ids[this.contact.uid]},this.onFrictionDeactivate=function(){this.removeListener("deactivate",t.onFrictionDeactivate);var i=t.friction_constraints.indexOf(this);t.friction_constraints.splice(i,1)}},t.IterativeSolver.prototype.addConstraint=function(t){-1===this.constraints.indexOf(t)&&this.constraints.push(t)},t.IterativeSolver.prototype.removeConstraint=function(t){var i=this.constraints.indexOf(t);-1!==i&&this.constraints.splice(i,1)},t.IterativeSolver.prototype.processContactManifolds=function(i){var e,o,s,a,n;for(o=i.first;o;){for(s=o.points.length,e=0;s>e;e++){a=o.points[e];var r=this.existing_contact_ids.hasOwnProperty(a.uid);r||(this.existing_contact_ids[a.uid]=!0,n=t.ObjectPool.getObject("ContactConstraint"),n.buildFromContact(a),this.contact_constraints.push(n),n.addListener("deactivate",this.onContactDeactivate),n=t.ObjectPool.getObject("FrictionConstraint"),n.buildFromContact(a),this.friction_constraints.push(n),n.addListener("deactivate",this.onFrictionDeactivate))}o=o.next_manifold}this.all_constraints.length=0,Array.prototype.push.apply(this.all_constraints,this.friction_constraints),Array.prototype.push.apply(this.all_constraints,this.constraints),Array.prototype.push.apply(this.all_constraints,this.contact_constraints)},t.IterativeSolver.prototype.prepareConstraints=function(t){var i,e,o,s,a,n=this.all_constraints.length;for(s=0;n>s;s++)if(e=this.all_constraints[s],e.active!==!1)for(i=e.rows.length,e.update(t),a=0;i>a;a++)o=e.rows[a],o.multiplier=0,o.computeB(e),o.computeD(),o.computeEta(e,t)},t.IterativeSolver.prototype.resolveContacts=function(){var e,o,a,n,r,c,h,l=0;for(e=0;e<this.penetrations_max_iterations;e++){for(l=0,r=0;r<this.contact_constraints.length;r++){o=this.contact_constraints[r],n=o.rows[0],a=0,null!=o.object_a&&o.object_a._mass!==1/0&&(a+=n.jacobian[0]*o.object_a.linear_factor.x*o.object_a.push_velocity.x+n.jacobian[1]*o.object_a.linear_factor.y*o.object_a.push_velocity.y+n.jacobian[2]*o.object_a.linear_factor.z*o.object_a.push_velocity.z+n.jacobian[3]*o.object_a.angular_factor.x*o.object_a.turn_velocity.x+n.jacobian[4]*o.object_a.angular_factor.y*o.object_a.turn_velocity.y+n.jacobian[5]*o.object_a.angular_factor.z*o.object_a.turn_velocity.z),null!=o.object_b&&o.object_b._mass!==1/0&&(a+=n.jacobian[6]*o.object_b.linear_factor.x*o.object_b.push_velocity.x+n.jacobian[7]*o.object_b.linear_factor.y*o.object_b.push_velocity.y+n.jacobian[8]*o.object_b.linear_factor.z*o.object_b.push_velocity.z+n.jacobian[9]*o.object_b.angular_factor.x*o.object_b.turn_velocity.x+n.jacobian[10]*o.object_b.angular_factor.y*o.object_b.turn_velocity.y+n.jacobian[11]*o.object_b.angular_factor.z*o.object_b.turn_velocity.z),c=(o.contact.penetration_depth-a)/n.D||0;var p=n.multiplier;n.multiplier=Math.max(n.lower_limit,Math.min(p+c,n.upper_limit)),c=n.multiplier-p,l=Math.max(l,c),o.object_a&&o.object_a._mass!==1/0&&(o.object_a.push_velocity.x+=c*n.B[0],o.object_a.push_velocity.y+=c*n.B[1],o.object_a.push_velocity.z+=c*n.B[2],o.object_a.turn_velocity.x+=c*n.B[3],o.object_a.turn_velocity.y+=c*n.B[4],o.object_a.turn_velocity.z+=c*n.B[5]),o.object_b&&o.object_b._mass!==1/0&&(o.object_b.push_velocity.x+=c*n.B[6],o.object_b.push_velocity.y+=c*n.B[7],o.object_b.push_velocity.z+=c*n.B[8],o.object_b.turn_velocity.x+=c*n.B[9],o.object_b.turn_velocity.y+=c*n.B[10],o.object_b.turn_velocity.z+=c*n.B[11])}if(l>=-t.EPSILON&&l<=t.EPSILON)break}for(r=0;r<this.contact_constraints.length;r++)o=this.contact_constraints[r],n=o.rows[0],null!=o.object_a&&o.object_a._mass!==1/0&&(h=o.object_a._mass_inverted,o.object_a.position.x+=h*n.jacobian[0]*o.object_a.linear_factor.x*n.multiplier*this.relaxation,o.object_a.position.y+=h*n.jacobian[1]*o.object_a.linear_factor.y*n.multiplier*this.relaxation,o.object_a.position.z+=h*n.jacobian[2]*o.object_a.linear_factor.z*n.multiplier*this.relaxation,
	i.x=n.jacobian[3]*o.object_a.angular_factor.x*n.multiplier*this.relaxation,i.y=n.jacobian[4]*o.object_a.angular_factor.y*n.multiplier*this.relaxation,i.z=n.jacobian[5]*o.object_a.angular_factor.z*n.multiplier*this.relaxation,o.object_a.inverseInertiaTensorWorldFrame.transformVector3(i),s.x=i.x,s.y=i.y,s.z=i.z,s.w=0,s.multiply(o.object_a.rotation),o.object_a.rotation.x+=.5*s.x,o.object_a.rotation.y+=.5*s.y,o.object_a.rotation.z+=.5*s.z,o.object_a.rotation.w+=.5*s.w,o.object_a.rotation.normalize()),null!=o.object_b&&o.object_b._mass!==1/0&&(h=o.object_b._mass_inverted,o.object_b.position.x+=h*n.jacobian[6]*o.object_b.linear_factor.x*n.multiplier*this.relaxation,o.object_b.position.y+=h*n.jacobian[7]*o.object_b.linear_factor.y*n.multiplier*this.relaxation,o.object_b.position.z+=h*n.jacobian[8]*o.object_b.linear_factor.z*n.multiplier*this.relaxation,i.x=n.jacobian[9]*o.object_b.angular_factor.x*n.multiplier*this.relaxation,i.y=n.jacobian[10]*o.object_b.angular_factor.y*n.multiplier*this.relaxation,i.z=n.jacobian[11]*o.object_b.angular_factor.z*n.multiplier*this.relaxation,o.object_b.inverseInertiaTensorWorldFrame.transformVector3(i),s.x=i.x,s.y=i.y,s.z=i.z,s.w=0,s.multiply(o.object_b.rotation),o.object_b.rotation.x+=.5*s.x,o.object_b.rotation.y+=.5*s.y,o.object_b.rotation.z+=.5*s.z,o.object_b.rotation.w+=.5*s.w,o.object_b.rotation.normalize()),n.multiplier=0},t.IterativeSolver.prototype.solveConstraints=function(){var t,i,e,o,s,a,n,r,c,h=this.all_constraints.length,l=0;for(s=0;h>s;s++)if(t=this.all_constraints[s],t.active!==!1)for(a=0;a<t.rows.length;a++)e=t.rows[a],o=e.multiplier_cached*this.warmstarting_factor,e.multiplier=o,t.object_a&&t.object_a._mass!==1/0&&(t.object_a.solver_impulse[0]+=o*e.B[0],t.object_a.solver_impulse[1]+=o*e.B[1],t.object_a.solver_impulse[2]+=o*e.B[2],t.object_a.solver_impulse[3]+=o*e.B[3],t.object_a.solver_impulse[4]+=o*e.B[4],t.object_a.solver_impulse[5]+=o*e.B[5]),t.object_b&&t.object_b._mass!==1/0&&(t.object_b.solver_impulse[0]+=o*e.B[6],t.object_b.solver_impulse[1]+=o*e.B[7],t.object_b.solver_impulse[2]+=o*e.B[8],t.object_b.solver_impulse[3]+=o*e.B[9],t.object_b.solver_impulse[4]+=o*e.B[10],t.object_b.solver_impulse[5]+=o*e.B[11]);for(n=0;n<this.max_iterations;n++){for(l=0,s=0;h>s;s++)if(t=this.all_constraints[s],t.active!==!1)for(i=t.rows.length,a=0;i>a;a++){e=t.rows[a],c=0,null!=t.object_a&&t.object_a._mass!==1/0&&(c+=e.jacobian[0]*t.object_a.linear_factor.x*t.object_a.solver_impulse[0]+e.jacobian[1]*t.object_a.linear_factor.y*t.object_a.solver_impulse[1]+e.jacobian[2]*t.object_a.linear_factor.z*t.object_a.solver_impulse[2]+e.jacobian[3]*t.object_a.angular_factor.x*t.object_a.solver_impulse[3]+e.jacobian[4]*t.object_a.angular_factor.y*t.object_a.solver_impulse[4]+e.jacobian[5]*t.object_a.angular_factor.z*t.object_a.solver_impulse[5]),null!=t.object_b&&t.object_b._mass!==1/0&&(c+=e.jacobian[6]*t.object_b.linear_factor.x*t.object_b.solver_impulse[0]+e.jacobian[7]*t.object_b.linear_factor.y*t.object_b.solver_impulse[1]+e.jacobian[8]*t.object_b.linear_factor.z*t.object_b.solver_impulse[2]+e.jacobian[9]*t.object_b.angular_factor.x*t.object_b.solver_impulse[3]+e.jacobian[10]*t.object_b.angular_factor.y*t.object_b.solver_impulse[4]+e.jacobian[11]*t.object_b.angular_factor.z*t.object_b.solver_impulse[5]),r=((e.eta-c)/e.D||0)*t.factor;var p=e.multiplier,b=p+r;b=this.sor_weight*b+(1-this.sor_weight)*p,e.multiplier=Math.max(e.lower_limit,Math.min(b,e.upper_limit)),r=e.multiplier-p;var _=(t.object_a&&t.object_a._mass!==1/0?t.object_a._mass:0)+(t.object_b&&t.object_b._mass!==1/0?t.object_b._mass:0);l=Math.max(l,Math.abs(r)/_),t.object_a&&t.object_a._mass!==1/0&&(t.object_a.solver_impulse[0]+=r*e.B[0],t.object_a.solver_impulse[1]+=r*e.B[1],t.object_a.solver_impulse[2]+=r*e.B[2],t.object_a.solver_impulse[3]+=r*e.B[3],t.object_a.solver_impulse[4]+=r*e.B[4],t.object_a.solver_impulse[5]+=r*e.B[5]),t.object_b&&t.object_b._mass!==1/0&&(t.object_b.solver_impulse[0]+=r*e.B[6],t.object_b.solver_impulse[1]+=r*e.B[7],t.object_b.solver_impulse[2]+=r*e.B[8],t.object_b.solver_impulse[3]+=r*e.B[9],t.object_b.solver_impulse[4]+=r*e.B[10],t.object_b.solver_impulse[5]+=r*e.B[11])}if(.1>=l)break}},t.IterativeSolver.prototype.applyConstraints=function(t){var o,s,a,n,r,c,h=this.all_constraints.length;for(n=0;h>n;n++)if(o=this.all_constraints[n],o.active!==!1){for(s=o.rows.length,o.last_impulse.x=o.last_impulse.y=o.last_impulse.z=0,r=0;s>r;r++)a=o.rows[r],a.multiplier_cached=a.multiplier,null!=o.object_a&&o.object_a._mass!==1/0&&(c=o.object_a._mass_inverted,e.x=c*t*a.jacobian[0]*o.object_a.linear_factor.x*a.multiplier,e.y=c*t*a.jacobian[1]*o.object_a.linear_factor.y*a.multiplier,e.z=c*t*a.jacobian[2]*o.object_a.linear_factor.z*a.multiplier,o.object_a.linear_velocity.add(e),o.last_impulse.add(e),i.x=t*a.jacobian[3]*o.object_a.angular_factor.x*a.multiplier,i.y=t*a.jacobian[4]*o.object_a.angular_factor.y*a.multiplier,i.z=t*a.jacobian[5]*o.object_a.angular_factor.z*a.multiplier,o.object_a.inverseInertiaTensorWorldFrame.transformVector3(i),o.object_a.angular_velocity.add(i),o.last_impulse.add(i)),null!=o.object_b&&o.object_b._mass!==1/0&&(c=o.object_b._mass_inverted,e.x=c*t*a.jacobian[6]*o.object_b.linear_factor.x*a.multiplier,e.y=c*t*a.jacobian[7]*o.object_b.linear_factor.y*a.multiplier,e.z=c*t*a.jacobian[8]*o.object_b.linear_factor.z*a.multiplier,o.object_b.linear_velocity.add(e),o.last_impulse.add(e),i.x=t*a.jacobian[9]*o.object_b.angular_factor.x*a.multiplier,i.y=t*a.jacobian[10]*o.object_b.angular_factor.y*a.multiplier,i.z=t*a.jacobian[11]*o.object_b.angular_factor.z*a.multiplier,o.object_b.inverseInertiaTensorWorldFrame.transformVector3(i),o.object_b.angular_velocity.add(i),o.last_impulse.add(i));o.breaking_threshold>0&&o.last_impulse.lengthSquared()>=o.breaking_threshold*o.breaking_threshold&&(o.active=!1)}},t.NarrowPhase=function(){this.contact_manifolds=new t.ContactManifoldList},t.NarrowPhase.prototype.updateContactManifolds=function(){for(var i=this.contact_manifolds.first,e=null;null!==i;)i.update(),0===i.points.length?(t.ObjectPool.freeObject("ContactManifold",i),null==e?this.contact_manifolds.first=i.next_manifold:e.next_manifold=i.next_manifold,i=i.next_manifold):(e=i,i=i.next_manifold)},t.NarrowPhase.prototype.midPhase=function(i,e){var o,s;i.shape instanceof t.CompoundShape?(o=i,s=e):(o=e,s=i);for(var a,n,r=t.ObjectPool.getObject("RigidBodyProxy"),c=0;c<o.shape.child_shapes.length;c++)if(a=o.shape.child_shapes[c],r.setFrom(o,a),r.shape instanceof t.CompoundShape||s.shape instanceof t.CompoundShape)this.midPhase(r,s);else if(n=this.getContact(r,s),null!=n){var h,l;if(n.object_a===r?(n.object_a=o,h=r,l=s):(n.object_b=o,h=s,l=r),h instanceof t.RigidBodyProxy)for(;h.parent;)h instanceof t.RigidBodyProxy&&h.shape_data.transform.transformVector3(n.contact_point_in_a),h=h.parent;if(l instanceof t.RigidBodyProxy)for(;l.parent;)l instanceof t.RigidBodyProxy&&l.shape_data.transform.transformVector3(n.contact_point_in_b),l=l.parent;n.object_a=h,n.object_b=l,this.addContact(h,l,n)}t.ObjectPool.freeObject("RigidBodyProxy",r)},t.NarrowPhase.prototype.meshCollision=function(){function o(o,s,l){a.copy(o.transform_inverse),a.multiply(s.transform);for(var p=[o.shape.hierarchy,s.shape.hierarchy];p.length;){var b=p.shift(),_=p.shift();if(b.isLeaf()&&_.isLeaf()){a.transformVector3Into(_.object.a,n.a),a.transformVector3Into(_.object.b,n.b),a.transformVector3Into(_.object.c,n.c),i.subtractVectors(n.b,n.a),e.subtractVectors(n.c,n.a),n.normal.crossVectors(i,e),n.normal.normalize();var u=t.TriangleTriangle(b.object,n);null!=u&&(o.transform.rotateVector3(u.contact_normal),o.transform.transformVector3(u.contact_point),o.transform.transformVector3(u.contact_point_in_b),s.transform_inverse.transformVector3(u.contact_point_in_b),u.object_a=o,u.object_b=s,u.restitution=(o.restitution+s.restitution)/2,u.friction=(o.friction+s.friction)/2,l(o,s,u))}else b.isLeaf()?(h.transform(_.left.aabb,a),b.aabb.intersects(h)&&p.push(b,_.left),c.transform(_.right.aabb,a),b.aabb.intersects(c)&&p.push(b,_.right)):_.isLeaf()?(r.transform(_.aabb,a),r.intersects(b.left.aabb)&&p.push(b.left,_),r.intersects(b.right.aabb)&&p.push(b.right,_)):(h.transform(_.left.aabb,a),c.transform(_.right.aabb,a),b.left.aabb.intersects(h)&&p.push(b.left,_.left),b.left.aabb.intersects(c)&&p.push(b.left,_.right),b.right.aabb.intersects(h)&&p.push(b.right,_.left),b.right.aabb.intersects(c)&&p.push(b.right,_.right))}}function s(i,e,o){var s=t.ObjectPool.getObject("RigidBodyProxy"),a=new t.CompoundShapeChild(i,new t.Vector3,new t.Quaternion);s.setFrom(e,a);var n,r=t.GjkEpa.GJK(s,o);return null!=t.GjkEpa.result?n=t.GjkEpa.result:null!=r&&(n=t.GjkEpa.EPA(r)),t.ObjectPool.freeObject("RigidBodyProxy",s),n}var a=new t.Matrix4,n=new t.TriangleShape(new t.Vector3,new t.Vector3,new t.Vector3),r=new t.AABB,c=new t.AABB,h=new t.AABB,l=function(){var i=new t.Matrix4,e=new t.AABB;return function(t,o,a){i.copy(o.transform),i.multiply(t.transform_inverse),e.transform(o.aabb,t.transform_inverse);for(var n,r=[t.shape.hierarchy];n=r.shift();)if(n.aabb.intersects(e))if(n.isLeaf()){var c=s(n.object,t,o);if(null!=c){for(var h=t;null!=h.parent;)h=h.parent;c.object_a=h,a(h,o,c)}}else r.push(n.left,n.right)}}();return function(i,e){var s=i.shape instanceof t.MeshShape,a=e.shape instanceof t.MeshShape;s&&a?o(i,e,this.addContact.bind(this)):s?l(i,e,this.addContact.bind(this)):l(e,i,this.addContact.bind(this))}}(),t.NarrowPhase.prototype.getContact=function(i,e){if(i.shape instanceof t.CompoundShape||e.shape instanceof t.CompoundShape)return void this.midPhase(i,e);if(i.shape instanceof t.MeshShape||e.shape instanceof t.MeshShape)return void this.meshCollision(i,e);var o;if(i.shape instanceof t.SphereShape&&e.shape instanceof t.SphereShape)o=t.SphereSphere(i,e);else if(i.shape instanceof t.SphereShape&&e.shape instanceof t.BoxShape||i.shape instanceof t.BoxShape&&e.shape instanceof t.SphereShape)o=t.BoxSphere(i,e);else{var s=t.GjkEpa.GJK(i,e);null!=t.GjkEpa.result?o=t.GjkEpa.result:null!=s&&(o=t.GjkEpa.EPA(s))}return o},t.NarrowPhase.prototype.addContact=function(t,i,e){this.contact_manifolds.getManifoldForObjects(t,i).addContact(e)},t.NarrowPhase.prototype.generateContacts=function(t){var i,e,o=t.length;for(this.updateContactManifolds(),i=0;o>i;i++)e=this.getContact(t[i][0],t[i][1]),null!=e&&this.addContact(t[i][0],t[i][1],e)},t.NarrowPhase.prototype.removeBody=function(t){for(var i=this.contact_manifolds.first;null!=i;){if(i.object_a===t||i.object_b===t){for(var e=0;e<i.points.length;e++)i.points[e].destroy();i.points.length=0}i=i.next}},t.ObjectPool={types:{},pools:{},registerType:function(t,i){this.types[t]=i,this.pools[t]=[]},getObject:function(t){var i=this.pools[t];return 0!==i.length?i.pop():this.types[t]()},freeObject:function(t,i){null!=i.removeAllListeners&&i.removeAllListeners(),this.pools[t].push(i)}},t.ObjectPool.registerType("ContactDetails",function(){return new t.ContactDetails}),t.ObjectPool.registerType("ContactManifold",function(){return new t.ContactManifold}),t.ObjectPool.registerType("GJK2SupportPoint",function(){return new t.GjkEpa.SupportPoint(new t.Vector3,new t.Vector3,new t.Vector3)}),t.ObjectPool.registerType("ConstraintRow",function(){return new t.ConstraintRow}),t.ObjectPool.registerType("ContactConstraint",function(){return new t.ContactConstraint}),t.ObjectPool.registerType("FrictionConstraint",function(){return new t.FrictionConstraint}),t.ObjectPool.registerType("RayIntersection",function(){return new t.RayIntersection}),t.ObjectPool.registerType("RigidBodyProxy",function(){return new t.RigidBodyProxy}),t.RigidBodyProxy=function(){this.parent=null,this.id=null,this.shape=null,this.aabb=new t.AABB,this._mass=null,this._mass_inverted=null,this.position=new t.Vector3,this.rotation=new t.Quaternion,this.transform=new t.Matrix4,this.transform_inverse=new t.Matrix4,this.restitution=null,this.friction=null},Object.defineProperty(t.RigidBodyProxy.prototype,"mass",{get:function(){return this._mass},set:function(t){this._mass=t,this._mass_inverted=1/t,this.inertiaTensor=this.shape.getInertiaTensor(t)}}),t.RigidBodyProxy.prototype.setFrom=function(t,i){this.parent=t,this.id=t.id,this.shape=i.shape,this.shape_data=i,this._mass=t._mass,t.transform.transformVector3Into(i.position,this.position),this.rotation.multiplyQuaternions(t.rotation,i.rotation),this.transform.makeTransform(this.rotation,this.position),this.transform.invertInto(this.transform_inverse),this.aabb.transform(this.shape.aabb,this.transform),this.restitution=t.restitution,this.friction=t.friction},t.RigidBodyProxy.prototype.findSupportPoint=t.RigidBody.prototype.findSupportPoint,t.RigidBodyProxy.prototype.getRigidBody=function(){for(var t=this.parent;t.parent;)t=this.parent;return t},t.World=function(i,e,o){this.ticks=0,this.broadphase=i,this.narrowphase=e,this.solver=o,o.world=this,this.rigid_bodies=[],this.ghost_bodies=[],this.gravity=new t.Vector3(0,-9.8,0),this.force_generators=[],this.listeners={}},t.EventEmitter.apply(t.World),t.World.prototype.step=function(t,e){e=e||t;var o,s,a,n,r,c;for(a=t/e,o=0;a>o;o++){for(this.ticks++,s=Math.min(e,t),t-=e,this.emit("stepStart",this.ticks,s),n=0,r=this.rigid_bodies.length;r>n;n++)this.rigid_bodies[n].updateDerived();for(n=0,r=this.rigid_bodies.length;r>n;n++)c=this.rigid_bodies[n],c._mass!==1/0&&(i.scaleVector(c.gravity||this.gravity,c._mass*s),c.accumulated_force.add(i));for(n=0,r=this.force_generators.length;r>n;n++)this.force_generators[n].applyForce();for(this.broadphase.update(),this.narrowphase.generateContacts(this.broadphase.collision_pairs),this.solver.processContactManifolds(this.narrowphase.contact_manifolds),this.solver.prepareConstraints(s),this.solver.resolveContacts(),this.solver.solveConstraints(),this.solver.applyConstraints(s),n=0,r=this.rigid_bodies.length;r>n;n++)c=this.rigid_bodies[n],c.integrate(s);for(n=0;n<this.ghost_bodies.length;n++)c=this.ghost_bodies[n],c.checkForEndedContacts();this.emit("stepEnd",this.ticks,s)}},t.World.prototype.addRigidBody=function(t){t.world=this,t.updateDerived(),this.rigid_bodies.push(t),this.broadphase.addBody(t)},t.World.prototype.removeRigidBody=function(t){var i;for(i=0;i<this.rigid_bodies.length;i++)if(this.rigid_bodies[i]===t){this.rigid_bodies.splice(i,1),this.broadphase.removeBody(t);break}this.narrowphase.removeBody(t)},t.World.prototype.addGhostBody=function(t){t.world=this,t.updateDerived(),this.ghost_bodies.push(t),this.broadphase.addBody(t)},t.World.prototype.removeGhostBody=function(t){for(var i=0;i<this.ghost_bodies.length;i++)if(this.ghost_bodies[i]===t){this.ghost_bodies.splice(i,1),this.broadphase.removeBody(t);break}},t.World.prototype.addForceGenerator=function(t){var i,e;for(i=0,e=this.force_generators.length;e>i;i++)if(this.force_generators[i]===t)return;this.force_generators.push(t)},t.World.prototype.removeForceGenerator=function(t){var i,e;for(i=0,e=this.force_generators.length;e>i;i++)if(this.force_generators[i]===t)return void this.force_generators.splice(i,1)},t.World.prototype.addConstraint=function(t){this.solver.addConstraint(t)},t.World.prototype.removeConstraint=function(t){this.solver.removeConstraint(t)},function(){var i=function(t,i){return t.t<i.t?-1:t.t>i.t?1:0};t.World.prototype.rayIntersect=function(t,e){var o=this.broadphase.rayIntersect(t,e);return o.sort(i),o},t.World.prototype.shapeIntersect=function(e,o,s){var a=new t.LineSweptShape(o,s,e),n=new t.RigidBody(a,0);n.updateDerived();for(var r=this.broadphase.intersectsWith(n),c=[],h=0;h<r.length;h++){var l=this.narrowphase.getContact(n,r[h]);if(null!=l){var p=t.ObjectPool.getObject("RayIntersection");p.object=l.object_b,p.normal.copy(l.contact_normal),p.point.scaleVector(l.contact_normal,-l.penetration_depth),p.point.add(l.contact_point),p.t=p.point.distanceTo(o),c.push(p)}}return c.sort(i),c}}(),"undefined"!=typeof window&&(window.Goblin=t),"undefined"!=typeof self&&(self.Goblin=t),"undefined"!=typeof module&&(module.exports=t)}();

	var Goblin = self.Goblin || _goblin;

	var _tmp_vector3 = new Goblin.Vector3();

	var MESSAGE_TYPES = {
		REPORTS: {
			/**
			 * world report containing matrix data for rigid bodies
			 * element [1] is how many simulation ticks have been processed (world.ticks)
			 * element [2] is number of rigid bodies in the array
			 * 2...n elements are the bodies' matrix data
			 */
			WORLD: 0,

			/**
			 * contains details for new contacts
			 * element [1] is the number of collisions, each collision is represented by:
			 * [object_a_id, object_b_id, world_contact_point{xyz}, contact_normal{xyz}, linear_velocity_delta{xyz}, angular_velocity_delta{xyz}, penetration_depth]
			 */
			COLLISIONS: 1
		},

		/**
		 * initializes the physics world
		 * [broadphase] String either 'sap' or 'naive' [default 'sap']
		 * [gravity] Object with float properties `x`, `y`, `z` [default {x:0, y:-9.8, z:0} ]
		 */
		INITIALIZE: 'INITIALIZE',

		/**
		 * adds a rigid body to the world
		 * body_id Integer unique id for the body
		 * shape_description Object definition corresponding to the type of rigid body (see BODY_TYPES)
		 * mass Float amount of mass the body has, 0 or Infinity creates a static object
		 * restitution Float body's restitution
		 * friction Float body's friction
		 * linear_damping Float body's linear damping
		 * angular_damping Float body's angular damping
		 * collision_groups Integer body's collision groups
		 * collision_mask Integer body's collision mask
		 */
		ADD_RIGIDBODY: 'ADD_RIGIDBODY',

		/**
		 * removes a rigid body from the world
		 * body_id Integer unique id of the body
		 */
		REMOVE_RIGIDBODY: 'REMOVE_RIGIDBODY',

		/**
		 * sets the specified rigid body's mass
		 * body_id Integer unique integer id for the body
		 * mass Float new mass value
		 */
		SET_RIGIDBODY_MASS: 'SET_RIGIDBODY_MASS',

		/**
		 * sets the specified rigid body's restitution
		 * body_id Integer unique integer id for the body
		 * mass Float new restitution value
		 */
		SET_RIGIDBODY_RESTITUTION: 'SET_RIGIDBODY_RESTITUTION',

		/**
		 * sets the specified rigid body's friction
		 * body_id Integer unique integer id for the body
		 * mass Float new friction value
		 */
		SET_RIGIDBODY_FRICTION: 'SET_RIGIDBODY_FRICTION',

		/**
		 * sets the specified rigid body's linear damping
		 * body_id Integer unique integer id for the body
		 * damping Float new linear damping value
		 */
		SET_RIGIDBODY_LINEAR_DAMPING: 'SET_RIGIDBODY_LINEAR_DAMPING',

		/**
		 * sets the specified rigid body's angular damping
		 * body_id Integer unique integer id for the body
		 * damping Float new angular damping value
		 */
		SET_RIGIDBODY_ANGULAR_DAMPING: 'SET_RIGIDBODY_ANGULAR_DAMPING',

		/**
		 * sets the specified rigid body's collision groups
		 * body_id Integer unique integer id for the body
		 * groups Integer new collision group value
		 */
		SET_RIGIDBODY_COLLISION_GROUPS: 'SET_RIGIDBODY_COLLISION_GROUPS',

		/**
		 * sets the specified rigid body's collision mask
		 * body_id Integer unique integer id for the body
		 * mask Integer new collision mask value
		 */
		SET_RIGIDBODY_COLLISION_MASK: 'SET_RIGIDBODY_COLLISION_MASK',

		/**
		 * sets the specified rigid body's position & rotation
		 * body_id Integer unique integer id for the body
		 * position Object new coordinates for the body's position, {x:x, y:y, z:z}
		 * rotation Object new quaternion values {x:x, y:y, z:z, w:w}
		 */
		SET_RIGIDBODY_TRANSFORM: 'SET_RIGIDBODY_TRANSFORM',

		/**
		 * sets the specified rigid body's linear velocity
		 * body_id Integer unique integer id for the body
		 * velocity Object new values for the body's linear velocity, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_LINEAR_VELOCITY: 'SET_RIGIDBODY_LINEAR_VELOCITY',

		/**
		 * sets the specified rigid body's angular velocity
		 * body_id Integer unique integer id for the body
		 * velocity Object new values for the body's angular velocity, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_ANGULAR_VELOCITY: 'SET_RIGIDBODY_ANGULAR_VELOCITY',

		/**
		 * sets the specified rigid body's linear factor
		 * body_id Integer unique integer id for the body
		 * factor Object new values for the body's linear factor, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_LINEAR_FACTOR: 'SET_RIGIDBODY_LINEAR_FACTOR',

		/**
		 * sets the specified rigid body's angular factor
		 * body_id Integer unique integer id for the body
		 * factor Object new values for the body's angular factor, {x:x, y:y, z:z}
		 */
		SET_RIGIDBODY_ANGULAR_FACTOR: 'SET_RIGIDBODY_ANGULAR_FACTOR',

		/**
		 * steps the physics simulation
		 * time_delta Float total amount of time, in seconds, to step the simulation by
		 * [max_step] Float maximum step of size, in seconds [default is value of `time_delta`]
		 */
		STEP_SIMULATION: 'STEP_SIMULATION',

		/**
		 * performs ray traces
		 * raytrace_id unique identifier for this request
		 * rays Array[ { start: { x:x, y:y, z:z }, end: { x:x, y:y, z:z } } ]
		 */
		RAYTRACE: 'RAYTRACE',

		/**
		 * results of a raytrace request
		 * raytrace_id unique identifier of the request
		 * results Array[ Array[ { body_id:body_id, point: { x:x, y:y, z:z }, normal: { x:x, y:y, z:z } } ] ]
		 */
		RAYTRACE_RESULTS: 'RAYTRACE_RESULTS'
	};

	var BODY_TYPES = {
		/**
		 * width Float box extent on x axis
		 * height Float box extent on y axis
		 * depth Float box extent on z axis
		 */
		BOX: 'BOX',

		/**
		 * shapes Array list of shape definitions composing the compound shape
		 */
		COMPOUND: 'COMPOUND',

		/**
		 * radius Float cylinder radius
		 * height Float cylinder extent on y axis
		 */
		CONE: 'CONE',

		/**
		 * vertices Array list of vertex components for all vertices, where list is [x1, y1, z1, x2, y2, z2 ... xN, yN, zN]
		 */
		CONVEX: 'CONVEX',

		/**
		 * radius Float cylinder radius
		 * height Float cylinder extent on y axis
		 */
		CYLINDER: 'CYLINDER',

		/**
		 * width Float plane extent on x axis
		 * height Float plane extent on y axis
		 */
		PLANE: 'PLANE',

		/**
		 * radius Float radius of the sphere
		 */
		SPHERE: 'SPHERE',

		/**
		 * vertices Array list of vertex components for all vertices, where list is [x1, y1, z1, x2, y2, z2 ... xN, yN, zN]
		 * faces Array list of vertex indexes composing the faces
		 */
		TRIANGLE: 'TRIANGLE'
	}


	// report-related variables and constants
	function ensureReportSize( report, report_size, chunk_size ) {
		var needed_buffer_size = ( report_size + 3 ) + chunk_size - report_size % chunk_size; // the +2 is to
			// add an array element to hold the report type, number of ticks simulation has gone through, and length of array data
		if ( report.length < needed_buffer_size ) {
			report = new Float32Array( needed_buffer_size );
		}
		return report;
	}
	var WORLD_REPORT_SIZE_RIGIDBODY = 30; // 1 body id + 16 matrix elements + 3 position elements + 4 rotation elements + 3 linear velocity + 3 angular_velocity
	var WORLD_REPORT_CHUNK_SIZE = 100 * WORLD_REPORT_SIZE_RIGIDBODY; // increase buffer by enough to hold 100 objects each time
	var world_report = new Float32Array( 0 );

	var COLLISION_REPORT_SIZE = 15; // 2 body ids + 4 Vector3s + penetration depth
	var COLLISION_REPORT_CHUNK_SIZE = 100 * COLLISION_REPORT_CHUNK_SIZE;
	var collision_report = new Float32Array( 0 );

	// global variables for the simulation
	var world;
	var id_body_map = {};
	var body_id_map = {};
	var new_collisions = [];

	function postMessage( type, parameters ) {
		self.postMessage({
			type: type,
			parameters: parameters
		});
	}

	function postReport( report ) {
		self.postMessage( report, [report.buffer] );
	}

	function reportWorld() {
		// compute necessary buffer size
		var rigid_body_ids = Object.keys( id_body_map );
		var rigid_bodies_count = rigid_body_ids.length;
		var report_size = ( WORLD_REPORT_SIZE_RIGIDBODY * rigid_bodies_count ); // elements needed to report bodies
		world_report = ensureReportSize( world_report, report_size, WORLD_REPORT_CHUNK_SIZE );

		// populate the report
		var idx = 0;
		world_report[idx++] = MESSAGE_TYPES.REPORTS.WORLD;
		world_report[idx++] = world.ticks;
		world_report[idx++] = rigid_bodies_count;

		for ( var i = 0; i < rigid_bodies_count; i++ ) {
			var rigid_body_id = rigid_body_ids[ i ];
			var rigid_body = id_body_map[ rigid_body_id ];
			world_report[idx++] = rigid_body_id;

			world_report[idx++] = rigid_body.transform.e00;
			world_report[idx++] = rigid_body.transform.e01;
			world_report[idx++] = rigid_body.transform.e02;
			world_report[idx++] = rigid_body.transform.e03;

			world_report[idx++] = rigid_body.transform.e10;
			world_report[idx++] = rigid_body.transform.e11;
			world_report[idx++] = rigid_body.transform.e12;
			world_report[idx++] = rigid_body.transform.e13;

			world_report[idx++] = rigid_body.transform.e20;
			world_report[idx++] = rigid_body.transform.e21;
			world_report[idx++] = rigid_body.transform.e22;
			world_report[idx++] = rigid_body.transform.e23;

			world_report[idx++] = rigid_body.transform.e30;
			world_report[idx++] = rigid_body.transform.e31;
			world_report[idx++] = rigid_body.transform.e32;
			world_report[idx++] = rigid_body.transform.e33;

			world_report[idx++] = rigid_body.position.x;
			world_report[idx++] = rigid_body.position.y;
			world_report[idx++] = rigid_body.position.z;

			world_report[idx++] = rigid_body.rotation.x;
			world_report[idx++] = rigid_body.rotation.y;
			world_report[idx++] = rigid_body.rotation.z;
			world_report[idx++] = rigid_body.rotation.w;

			world_report[idx++] = rigid_body.linear_velocity.x;
			world_report[idx++] = rigid_body.linear_velocity.y;
			world_report[idx++] = rigid_body.linear_velocity.z;

			world_report[idx++] = rigid_body.angular_velocity.x;
			world_report[idx++] = rigid_body.angular_velocity.y;
			world_report[idx++] = rigid_body.angular_velocity.z;
		}

		postReport( world_report );
	}

	function reportCollisions() {
		// divided by 2 because each new collision triggers two `contact` events and the second is a duplicate
		// divided by 9 as each entry in `new_collisions` spans nine indices
		var new_collisions_count = new_collisions.length / 2 / 9;

		// compute buffer size
		var report_size = ( COLLISION_REPORT_SIZE * new_collisions_count ); // elements needed to report collisions
		collision_report = ensureReportSize( collision_report, report_size, COLLISION_REPORT_SIZE );
		collision_report[0] = MESSAGE_TYPES.REPORTS.COLLISIONS;
		collision_report[1] = new_collisions_count;

		var report_idx = 2;

		for ( var i = 0; i < new_collisions.length; i += 18 ) {
			var object_a = new_collisions[i+0];
			var object_b = new_collisions[i+1];
			var contact = new_collisions[i+2];

			collision_report[report_idx+0] = body_id_map[ object_a.id ];
			collision_report[report_idx+1] = body_id_map[ object_b.id ];

			collision_report[report_idx+2] = contact.contact_point.x;
			collision_report[report_idx+3] = contact.contact_point.y;
			collision_report[report_idx+4] = contact.contact_point.z;

			collision_report[report_idx+5] = contact.contact_normal.x;
			collision_report[report_idx+6] = contact.contact_normal.y;
			collision_report[report_idx+7] = contact.contact_normal.z;

			collision_report[report_idx+8] = new_collisions[i+3];
			collision_report[report_idx+9] = new_collisions[i+4];
			collision_report[report_idx+10] = new_collisions[i+5];

			collision_report[report_idx+11] = new_collisions[i+6];
			collision_report[report_idx+12] = new_collisions[i+7];
			collision_report[report_idx+13] = new_collisions[i+8];

			collision_report[report_idx+14] = contact.penetration_depth;

			report_idx += COLLISION_REPORT_SIZE;
		}

		new_collisions.length = 0;

		postReport( collision_report );
	}

	function getShapeForDefinition( shape_definition ) {
		var shape;

		if ( shape_definition.body_type === BODY_TYPES.BOX ) {
			shape = new Goblin.BoxShape(shape_definition.width, shape_definition.height, shape_definition.depth);
		} else if ( shape_definition.body_type === BODY_TYPES.COMPOUND ) {
			shape = new Goblin.CompoundShape();
			shape_definition.shapes.forEach(function( child_shape ) {
				shape.addChildShape(
					getShapeForDefinition( child_shape.shape_definition ),
					new Goblin.Vector3( child_shape.position.x, child_shape.position.y, child_shape.position.z ),
					new Goblin.Quaternion( child_shape.quaternion.x, child_shape.quaternion.y, child_shape.quaternion.z, child_shape.quaternion.w )
				);
			});
		} else if ( shape_definition.body_type === BODY_TYPES.CONE ) {
			shape = new Goblin.ConeShape(shape_definition.radius, shape_definition.height);
		} else if ( shape_definition.body_type === BODY_TYPES.CONVEX ) {
			shape = new Goblin.ConvexShape(
				shape_definition.vertices.reduce(
					function( vertices, component, idx, source ) {
						if (idx % 3 == 0) {
							vertices.push(
								new Goblin.Vector3( source[idx], source[idx+1], source[idx+2] )
							);
						}
						return vertices;
					},
					[]
				)
			);
		} else if ( shape_definition.body_type === BODY_TYPES.CYLINDER ) {
			shape = new Goblin.CylinderShape( shape_definition.radius, shape_definition.height );
		} else if ( shape_definition.body_type === BODY_TYPES.PLANE ) {
			shape = new Goblin.PlaneShape( 2, shape_definition.width, shape_definition.height );
		} else if ( shape_definition.body_type === BODY_TYPES.SPHERE ) {
			shape = new Goblin.SphereShape( shape_definition.radius );
		} else if ( shape_definition.body_type === BODY_TYPES.TRIANGLE ) {
			shape = new Goblin.MeshShape(
				shape_definition.vertices.reduce(
					function( vertices, component, idx, source ) {
						if (idx % 3 == 0) {
							vertices.push(
								new Goblin.Vector3( source[idx], source[idx+1], source[idx+2] )
							);
						}
						return vertices;
					},
					[]
				),
				shape_definition.faces
			);
		}

		return shape;
	}

	// message handling
	(function() {
		var handlers = {};
		function handleMessage( message, handler ) {
			handlers[message] = handler;
		}
		self.addEventListener(
			'message',
			function(e) {
				var data = e.data;
				var type;
				var parameters;

				if ( data instanceof Float32Array ) {
					type = data[0];
					parameters = data;
				} else {
					data = data || {};
					type = data.type;
					parameters = data.parameters;
				}

				if ( handlers.hasOwnProperty( type ) ) {
					handlers[type]( parameters );
				} else {
					throw new Error( 'Physijs worker received unknown message type: ' + type );
				}
			}
		);

		handleMessage(
			MESSAGE_TYPES.REPORTS.WORLD,
			function( report ) {
				world_report = report;
			}
		);

		handleMessage(
			MESSAGE_TYPES.REPORTS.COLLISIONS,
			function( report ) {
				collision_report = report;
			}
		);

		handleMessage(
			MESSAGE_TYPES.INITIALIZE,
			function( parameters ) {
				var broadphase = parameters.broadphase === 'naive' ? new Goblin.BasicBroadphase() : new Goblin.SAPBroadphase();

				world = new Goblin.World(
					broadphase,
					new Goblin.NarrowPhase(),
					new Goblin.IterativeSolver()
				);

				if ( parameters.hasOwnProperty('gravity') ) {
					world.gravity.set( parameters.gravity.x, parameters.y, parameters.z );
				}
			}
		);

		handleMessage(
			MESSAGE_TYPES.ADD_RIGIDBODY,
			function( parameters ) {
				var shape_definition = parameters.shape_definition;
				var shape = getShapeForDefinition( shape_definition );
				var body = new Goblin.RigidBody( shape, parameters.mass );

				body.restitution = parameters.restitution;
				body.friction = parameters.friction;
				body.linear_damping = parameters.linear_damping;
				body.angular_damping = parameters.angular_damping;
				body.collision_groups = parameters.collision_groups;
				body.collision_mask = parameters.collision_mask;

				body.addListener(
					'contact',
					function( other_body, contact ) {
						new_collisions.push( this, other_body, contact );

						// find relative velocities
						_tmp_vector3.subtractVectors( other_body.linear_velocity, this.linear_velocity );
						new_collisions.push( _tmp_vector3.x, _tmp_vector3.y, _tmp_vector3.z );

						_tmp_vector3.subtractVectors( other_body.angular_velocity, this.angular_velocity );
						new_collisions.push( _tmp_vector3.x, _tmp_vector3.y, _tmp_vector3.z );
					}
				);

				world.addRigidBody( body );

				id_body_map[ parameters.body_id ] = body;
				body_id_map[ body.id ] = parameters.body_id;
			}
		);
		
		handleMessage(
			MESSAGE_TYPES.REMOVE_RIGIDBODY,
			function( parameters ) {
				var body_id = parameters.body_id;
				var body = id_body_map[ body_id ];
				world.removeRigidBody( body );
				delete id_body_map[ body_id ];
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_MASS,
			function( parameters ) {
				id_body_map[ parameters.body_id ].mass = parameters.mass;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_RESTITUTION,
			function( parameters ) {
				id_body_map[ parameters.body_id ].restitution = parameters.restitution;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_FRICTION,
			function( parameters ) {
				id_body_map[ parameters.body_id ].friction = parameters.friction;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_LINEAR_DAMPING,
			function( parameters ) {
				id_body_map[ parameters.body_id ].linear_damping = parameters.damping;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_ANGULAR_DAMPING,
			function( parameters ) {
				id_body_map[ parameters.body_id ].angular_damping = parameters.damping;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_COLLISION_GROUPS,
			function( parameters ) {
				id_body_map[ parameters.body_id ].collision_groups = parameters.collision_groups;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_COLLISION_MASK,
			function( parameters ) {
				id_body_map[ parameters.body_id ].collision_mask = parameters.collision_mask;
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_TRANSFORM,
			function( parameters ) {
				id_body_map[ parameters.body_id ].position.set(
					parameters.position.x,
					parameters.position.y,
					parameters.position.z
				);

				id_body_map[ parameters.body_id ].rotation.set(
					parameters.rotation.x,
					parameters.rotation.y,
					parameters.rotation.z,
					parameters.rotation.w
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_LINEAR_VELOCITY,
			function( parameters ) {
				id_body_map[ parameters.body_id ].linear_velocity.set(
					parameters.velocity.x,
					parameters.velocity.y,
					parameters.velocity.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_ANGULAR_VELOCITY,
			function( parameters ) {
				id_body_map[ parameters.body_id ].angular_velocity.set(
					parameters.velocity.x,
					parameters.velocity.y,
					parameters.velocity.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_LINEAR_FACTOR,
			function( parameters ) {
				id_body_map[ parameters.body_id ].linear_factor.set(
					parameters.factor.x,
					parameters.factor.y,
					parameters.factor.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.SET_RIGIDBODY_ANGULAR_FACTOR,
			function( parameters ) {
				id_body_map[ parameters.body_id ].angular_factor.set(
					parameters.factor.x,
					parameters.factor.y,
					parameters.factor.z
				);
			}
		);

		handleMessage(
			MESSAGE_TYPES.STEP_SIMULATION,
			function( parameters ) {
				world.step( parameters.time_delta, parameters.max_step );
				reportWorld();
				reportCollisions();
			}
		);

		handleMessage(
			MESSAGE_TYPES.RAYTRACE,
			function( parameters ) {
				var ray_start = new Goblin.Vector3();
				var ray_end = new Goblin.Vector3();
				var results = parameters.rays.map(function( ray ) {
					ray_start.set( ray.start.x, ray.start.y, ray.start.z );
					ray_end.set( ray.end.x, ray.end.y, ray.end.z );
					var intersections = world.rayIntersect( ray_start, ray_end );
					return intersections.map(function(intersection) {
						var mapped_body = body_id_map[ intersection.object.id ];

						// only return an intersection if this body is tracked outside this worker
						if ( mapped_body == null ) {
							return null;
						}

						return {
							body_id: intersection.object.id,
							point: { x: intersection.point.x, y: intersection.point.y, z: intersection.point.z },
							normal: { x: intersection.normal.x, y: intersection.normal.y, z: intersection.normal.z },
						};
					}).filter(function(intersection) {
						return intersection != null;
					});
				});

				postMessage(
					MESSAGE_TYPES.RAYTRACE_RESULTS,
					{
						raytrace_id: parameters.raytrace_id,
						results: results
					}
				);
			}
		)
	})();

})();