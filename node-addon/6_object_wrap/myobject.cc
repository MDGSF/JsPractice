#include "myobject.h"

Napi::Object MyObject::Init(Napi::Env env, Napi::Object exports) {
  Napi::Function func =
      DefineClass(env, "MyObject",
                  {
                      InstanceMethod("plusOne", &MyObject::PlusOne),
                      InstanceMethod("value", &MyObject::GetValue),
                      InstanceMethod("multiply", &MyObject::Multiply),
                  });
  Napi::FunctionReference* constructor = new Napi::FunctionReference();
  *constructor = Napi::Persistent(func);
  env.SetInstanceData(constructor);

  exports.Set("MyObject", func);
  return exports;
}

MyObject::MyObject(const Napi::CallbackInfo& info)
    : Napi::ObjectWrap<MyObject>(info) {
  Napi::Env env = info.Env();

  int length = info.Length();

  if (length <= 0 || !info[0].IsNumber()) {
    Napi::TypeError::New(env, "Number expected").ThrowAsJavaScriptException();
    return;
  }

  Napi::Number value = info[0].As<Napi::Number>();
  this->m_value = value.DoubleValue();
}

Napi::Value MyObject::GetValue(const Napi::CallbackInfo& info) {
  return Napi::Number::New(info.Env(), this->m_value);
}

Napi::Value MyObject::PlusOne(const Napi::CallbackInfo& info) {
  this->m_value += 1;
  return MyObject::GetValue(info);
}

Napi::Value MyObject::Multiply(const Napi::CallbackInfo& info) {
  Napi::Number multiple;
  if (info.Length() <= 0 || !info[0].IsNumber()) {
    multiple = Napi::Number::New(info.Env(), 1);
  } else {
    multiple = info[0].As<Napi::Number>();
  }

  Napi::Object obj = info.Env().GetInstanceData<Napi::FunctionReference>()->New(
      {Napi::Number::New(info.Env(), this->m_value * multiple.DoubleValue())});

  return obj;
}