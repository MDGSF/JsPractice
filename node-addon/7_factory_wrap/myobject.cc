#include "myobject.h"

#include "uv.h"

using namespace Napi;

Napi::Object MyObject::Init(Napi::Env env, Napi::Object exports) {
  Napi::Function func = DefineClass(
      env, "MyObject", {InstanceMethod("plusOne", &MyObject::PlusOne)});

  Napi::FunctionReference* constructor = new Napi::FunctionReference();
  *constructor = Napi::Persistent(func);
  env.SetInstanceData(constructor);

  exports.Set("MyObject", func);
  return exports;
}

Napi::Object MyObject::NewInstance(Napi::Env env, Napi::Value arg) {
  Napi::EscapableHandleScope scope(env);
  Napi::Object obj = env.GetInstanceData<Napi::FunctionReference>()->New({arg});
  return scope.Escape(napi_value(obj)).ToObject();
}

MyObject::MyObject(const Napi::CallbackInfo& info)
    : Napi::ObjectWrap<MyObject>(info) {
  this->m_counter = info[0].As<Napi::Number>().DoubleValue();
}

Napi::Value MyObject::PlusOne(const Napi::CallbackInfo& info) {
  Napi::Env env = info.Env();
  this->m_counter += 1;
  return Napi::Number::New(env, this->m_counter);
}
